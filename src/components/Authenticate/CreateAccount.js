import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import Input from './utils/Input';
import { setUserIdentifier } from '../../Features/UtilitySlice';

function CreateAccount({ setAuthMode }) {

    const dispatch = useDispatch();

    const [authorized, setAuthorized] = useState({
        username: { valid: false, val: "", alert: "", color: "" },
        create_email: { valid: false, val: "", alert: "", color: "" },
        create_pass: { valid: false, val: "", alert: "", color: "" },
        r_password: { valid: false, val: "", alert: "", color: "" },
        hint: { valid: false, val: "", alert: "", color: "" }
    });

    const cntRef = useRef();
    useEffect(() => {
        let input = cntRef.current.querySelector('input');
        input.focus();
        input.click();
    }, []);

    function Back() {
        setAuthMode("login");
    }

    async function sendToServer() {
        let key = Object.keys(authorized).find(key => authorized[key].valid === false);
        if (key) {
            setAuthorized({ ...authorized, [key]: { ...authorized[key], color: "yellow" } });
            setTimeout(() => { setAuthorized({ ...authorized, [key]: { ...authorized[key], color: "" } }) }, 3000);
            return;
        }

        const userCredentials = {
            username: authorized.username.val,
            email: authorized.create_email.val,
            password: authorized.create_pass.val,
            hint: authorized.hint.val
        };

        try {
            let response = await axios.post('https://windows10chrome.herokuapp.com/auth/create_account', userCredentials);
            dispatch(setUserIdentifier({ data: authorized.create_email.val, resetPassword: false }));
            setAuthMode("verifyOTP");
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container ref={cntRef}>
            <h1>Create an account for this PC</h1>
            <p>Who's going to use this PC?</p>
            <Input authorized={authorized} setAuthorized={setAuthorized} name="username" placeholder="Username" type="text" />
            <p>Your Microsoft account opens a world of benefits. Use Microsoft account for your personalized
                <br /> experience.
            </p>
            <Input authorized={authorized} setAuthorized={setAuthorized} name="create_email" placeholder="Email or phone" type="email" />
            <p>If you want to use a password, choose something that will be easy for you to remember but hard for
                <br /> others to guess. Make it secure.
            </p>
            <Input authorized={authorized} setAuthorized={setAuthorized} name="create_pass" placeholder="Enter Password" type="text" />
            <Input authorized={authorized} setAuthorized={setAuthorized} name="r_password" placeholder="Re-enter Password" type="text" />
            <Input authorized={authorized} setAuthorized={setAuthorized} name="hint" placeholder="Password hint" type="text" />
            <Footer>
                <Buttons>
                    <button type="button" onClick={Back}>Back</button>
                    <button type="button" onClick={sendToServer}>Next</button>
                </Buttons>
            </Footer>
        </Container>
    )
}

export default CreateAccount;

const Container = styled.div`
    height:100%;
    width:100%;
    color:white;
    box-sizing: border-box;
    padding: 4rem;

    h1{
        font-weight:200;
        margin-top:2rem;   
    }

    input{ width:18rem; }
    p{ margin: 1rem 0 0.3rem; }
`

const Footer = styled.div`
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 4rem;
`

const Buttons = styled.div`
    display: flex;
    height:75%;
    gap:7px;
    
    button{
        width:7rem; 
        color:white;
        border: none;
        transition:filter 50ms;
    }

    button:nth-child(1){ background:#3179b5; }
    button:nth-child(2){ background:var(--windowsBlue); }

    button:hover{
        cursor:pointer;
        filter:brightness(0.95);
    }

    button:focus-visible{
        outline:none;
    }
`