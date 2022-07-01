import React, { useState } from 'react';
import styled from 'styled-components';
import validator from 'validator';
import InputTag from './utils/InputTag';

function Login({ setLogin }) {

    const [input, setInput] = useState({ isEmail: true, login_email: "", login_pass: "", alert: "", color: "", valid_email: false, valid_pass: false });

    function createAcc() { setLogin(false); }

    function nextBtnHandler() {
        if (input.isEmail && input.valid_email) {
            setInput({ ...input, isEmail: false, alert: "" });
            return;
        }
        if(!input.valid_pass) return;
        console.log(input.login_pass, input.login_email)
    }

    function backBtnHandler() {
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

    return (
        <Container>
            <FlexBox>
                <h1>Let's add your account</h1>
                <p>Access your apps, files, and services across your devices with your Microsoft account.</p>
                <AvatarCtn>
                    <img src="Images/avatar.svg" alt="avatar" />
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
                    <p onClick={createAcc}><span>Create account</span></p>
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
                    {!input.isEmail && <button onClick={backBtnHandler}>Back</button>}
                    <button onClick={nextBtnHandler}>Next</button>
                </Buttons>
            </Footer>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    height:100%;
    width:100%;
    color:white;
    box-sizing: border-box;
    padding: 4rem;

    h1{
        font-size: 2.8rem;
        font-weight: 200;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    p{margin:0px;}
`

const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    input{ 
        width:60%;
        height:2.4rem;
    }
`

const AvatarCtn = styled.div`
    height: 16rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    box-sizing: border-box;
    padding: 2rem 2rem 0.5rem;

    img{
        height: 10rem;
        width: 10rem;
    }
`

const Tagbox = styled.div`
    width:60%;
    color:lightblue;
    p{
        margin-bottom:0px;
        margin-top:7px;
        transition:color 250ms;
        font-weight:600;
    }
    span:hover{ color: mediumblue };
`

const Footer = styled.div`
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6rem;
    color:lightblue;
    transition:color 250ms;
    span:hover{ color: mediumblue };
`

const Alert = styled.div`
    height: 1rem;
    line-height: 2rem;
    color: yellow;
    width: 100%;
    text-align: center;
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
`