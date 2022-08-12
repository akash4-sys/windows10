import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Cookies from "universal-cookie";
import Loader from './utils/Loader';
import { Container, Footer, Buttons } from './utils/LoginStyle';

const cookies = new Cookies();

function VerifyOTP({ setAuthMode }) {

    const headers = useSelector((state) => state.utility.userIdentifier);
    const navigate = useNavigate();
    const [inputArr, setInputArr] = useState({ "I0": "", "I1": "", "I2": "", "I3": "", "I4": "", "I5": "" });
    const [states, setStates] = useState({ loading: false, alert:"", alert_color:"yellow" });
    const inputCtnRef = useRef();

    function focusInputTag(index) {
        if (index >= 6 || index < 0) return;
        let input = inputCtnRef.current.querySelectorAll('input');
        input[index].focus();
        input[index].click();
    }

    useEffect(() => {
        if(!states.loading) focusInputTag(0);
    }, [])

    function handleChange(e) {
        let val = e.target.value;
        if (isNaN(val)) return;
        setInputArr({ ...inputArr, [e.target.name]: val });
        if (!val) return;
        let index = parseInt(e.target.name.slice(-1)) + 1;
        focusInputTag(index);
    }

    function handleKeyDown(e) {
        if (e.key === 'Backspace') {
            e.preventDefault();
            let index = parseInt(e.target.name.slice(-1));
            setInputArr({ ...inputArr, [e.target.name]: "" });
            focusInputTag(index - 1);
        }
    }

    function goBack() {
        setAuthMode("createAccount");
    }

    async function sendToServer() {
        let otp = "";
        Object.keys(inputArr).forEach(key => otp += inputArr[key]);
        if (!otp || otp.length >= 7) return;

        if (cookies.get('WAC10')) cookies.remove("WAC10", { path: "/" });
        if (cookies.get('WACR10')) cookies.remove("WACR10", { path: "/" });

        try {
            setStates({ loading: true, alert:"" });
            let response = await axios.post('https://windows10chrome.herokuapp.com/auth/verify_otp', { 
                email: headers.data, otp, resetPassword: headers.resetPassword 
            });
            if(headers.resetPassword){
                setAuthMode("NewPassword");
                return;
            }

            cookies.set("WAC10", response.data.access_Token, { path: "/" });
            cookies.set("WACR10", response.data.refresh_Token, { path: "/" });

            if (response.data.successful) navigate('/');
        } catch (err) {
            let alert = err.response?.data?.message || err.message;
            setStates({ loading: false, alert, alert_color:"red" });
        }
    }

    async function resendOTP() {
        if (cookies.get('WAC10')) cookies.remove("WAC10", { path: "/" });
        if (cookies.get('WACR10')) cookies.remove("WACR10", { path: "/" });
        
        try {
            setStates({ loading: true, alert:"" });
            let response = await axios.post('https://windows10chrome.herokuapp.com/auth/resendOtp', { email: headers.data });
            if (response.data.successful) setStates({ loading: false, alert:response.data.message });
        } catch (err) {
            let alert = err.response?.data?.message || err.message;
            setStates({ loading: false, alert, alert_color:"red" });
        }
    }

    return !states.loading ? (
        <IContainer>
            <h1>Verification Code</h1>
            <p>Please confirm your {headers.type} by entering the OTP sent to {headers.payload}</p>
            <p style={{color:states.alert_color}}>{states.alert}</p>
            <IFlexBox>
                <small>6 Digit Code</small>
                <FlexBox>
                    <OtpCtn ref={inputCtnRef}>
                        {
                            Object.keys(inputArr).map((key, i) => (
                                <input maxLength="1" name={key} value={inputArr[key]}
                                    onChange={handleChange} onKeyDown={handleKeyDown} autoComplete="off" key={key} />
                            ))
                        }
                    </OtpCtn>
                </FlexBox>
            </IFlexBox>
            <Footer>
                <div>Didn't get a code?
                    <span onClick={resendOTP}> Click to resend</span>
                </div>
                <Buttons>
                    <button onClick={goBack}>Back</button>
                    <button onClick={sendToServer}>Next</button>
                </Buttons>
            </Footer>
        </IContainer>
    )
    :
    <Loader />
}

export default VerifyOTP;

const IContainer = styled(Container)`
    text-align:center;
    p{
        margin-top: 0px;
        margin-bottom: 3rem;
    }
`

const FlexBox = styled.div`
    display:flex;
    justify-content:center;
`

const IFlexBox = styled(FlexBox)`
    width:100%;
    height:50%;
    flex-direction:column;
`

const OtpCtn = styled.div`
    padding: 1rem 0 2rem;
    display: flex;
    justify-content: space-around;
    width: 50%;

    input{
        margin:0% 1%;
        height: 3rem;
        aspect-ratio: 1;
        font-size: xxx-large;
        text-align: center;
        caret-color: transparent;
        border-radius:3px;
        border:none;
    }

    input:focus-visible{
        outline: 5px solid var(--windowsBlue);
    }
`