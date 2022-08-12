import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import axios from 'axios';
import Cookies from "universal-cookie";
import { InputTag, Container, Footer, Buttons, FlexBox, AvatarCtn, Alert, Tagbox, TagboxOpt } from './utils/LoginStyle';
import { setUserIdentifier } from '../../Features/UtilitySlice';
import Loader from './utils/Loader';

const cookies = new Cookies();

function Login({ setAuthMode }) {

    const dispatch = useDispatch();
    const savedData = useSelector((state) => state.utility.userIdentifier);

    const [input, setInput] = useState({
        isEmail: true, login_email: savedData.data, login_pass: "", alert: "", color: "", valid_email: false, valid_pass: false, load: false,
    });
    const [loginMode, setLoginMode] = useState(true);
    const navigate = useNavigate();

    function createAcc() { setAuthMode("createAccount"); }
    function forgotPass() { setLoginMode(false); }

    async function nextBtnHandler() {
        if (loginMode) {
            if (input.isEmail && input.valid_email) {
                setInput({ ...input, isEmail: false, alert: "" });
                return;
            }
            if (!input.valid_pass || !input.valid_email) return;

            const userCredentials = { email: input.login_email, password: input.login_pass };

            try {
                setInput({ ...input, load: true, alert: "" });
                let response = await axios.post('https://windows10chrome.herokuapp.com/auth/login', userCredentials);
                cookies.set("WAC10", response.data.access_Token, { path: "/" });
                cookies.set("WACR10", response.data.refresh_Token, { path: "/" });
                if (response.data.successful) {
                    setInput({ ...input, load: false, alert: response.data.message });
                    navigate('/')
                };
            } catch (err) {
                setInput({ ...input, load: false, alert: err.response.data.message });
            }
        }
        else {
            if (!input.valid_email) return;
            setInput({ ...input, alert: "" });
            try {
                setInput({ ...input, load: true, alert: "" });
                let response = await axios.post('https://windows10chrome.herokuapp.com/auth/resetpassword', { email: input.login_email });
                dispatch(setUserIdentifier({ data: input.login_email, resetPassword: true }));
                if (response.data.successful) setAuthMode("verifyOTP");
                setInput({ ...input, load: false, alert: response.data.message });
            } catch (err) {
                let msg = err.response?.data?.message || err.message;
                setInput({ ...input, load: false, alert: msg });
            }
        }
    }

    function backBtnHandler() {
        setLoginMode(true);
        setInput({ ...input, isEmail: true });
    }

    function handleChange(e) {
        let val = e.target.value;
        switch (e.target.name) {
            case 'login_email': if (validator.isEmail(val) || validator.isMobilePhone(val)) {
                setInput({ ...input, login_email: val, alert: "", valid_email: true });
                break;
            }
                setInput({ ...input, login_email: val, alert: "Please enter a valid email or phone number.", valid_email: false });
                break;
            default:
                if (val.length !== 0) {
                    setInput({ ...input, [e.target.name]: val, valid_pass: true });
                    break;
                }
                setInput({ ...input, [e.target.name]: val, valid_pass: false });
                break;
        }
    }


    return !input.load ?
        (
            <Container>
                <FlexBox>
                    {
                        loginMode ?
                            <>
                                <h1 style={{ textAlign: "center" }}>Let's add your account</h1>
                                <p data-ptype="center">Access your apps, files, and services across your devices with your Microsoft account.</p>
                            </>
                            :
                            <>
                                <h1 style={{ textAlign: "center" }}>Reset your password</h1>
                                <p data-ptype="center">Enter your registered email or phone number to reset your password.</p>
                            </>
                    }
                    <AvatarCtn>
                        <img src={loginMode ? "Images/avatar.svg" : "Images/ResetPass.ico"} alt="avatar" />
                    </AvatarCtn>
                    <Alert>{input.alert}</Alert>
                    {
                        input.isEmail ?
                            <InputTag type="text" name="login_email" placeholder="Enter email or phone number"
                                value={input.login_email} onChange={handleChange} autoComplete="off" required
                                style={{ borderColor: input.color, backgroundColor: input.login_email && "white" }}
                            />
                            :
                            <InputTag type="text" name="login_pass" placeholder="Password"
                                value={input.login_pass} onChange={handleChange} autoComplete="off" required
                                style={{ borderColor: input.color, backgroundColor: input.login_pass && "white" }}
                            />
                    }
                    <Tagbox>
                        <TagboxOpt>
                            <p onClick={createAcc}><span>Create account</span></p>
                            <p onClick={forgotPass}><span>Forgot Password?</span></p>
                        </TagboxOpt>
                        <p><span>Sign in with a security key</span></p>
                    </Tagbox>
                </FlexBox>

                <Footer>
                    <div>
                        <span>Privacy & Cookies</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>Terms of use</span>
                    </div>
                    <Buttons>
                        {(!input.isEmail || !loginMode) && <button onClick={backBtnHandler}>Back</button>}
                        <button onClick={nextBtnHandler}>Next</button>
                    </Buttons>
                </Footer>
            </Container>
        )
        :
        <Loader />
}

export default Login;