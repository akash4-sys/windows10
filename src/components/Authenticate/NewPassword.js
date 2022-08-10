import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { Container, Footer, Buttons, AvatarCtn, FlexBox } from './utils/LoginStyle';
import Input from './utils/Input';

function NewPassword({ setAuthMode }) {

    const [authorized, setAuthorized] = useState({
        create_pass: { valid: false, val: "", alert: "", color: "" },
        r_password: { valid: false, val: "", alert: "", color: "" },
    });

    const savedData = useSelector((state) => state.utility.userIdentifier);

    async function nextBtnHandler() {
        const userCredentials = { email: savedData.data, newpassword: authorized.create_pass.val };
        try {
            let response = await axios.post('https://windows10chrome.herokuapp.com/auth/updatepassword', userCredentials);
            if (response.data.successful){
                setAuthMode("login");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Container>
            <FlexBox2>
                <h1 style={{ textAlign: "center" }}>Reset your password</h1>
                <p>Enter your new password.</p>
                <AvatarCtn>
                    <img src="Images/ResetPass.ico" alt="reset" />
                </AvatarCtn>
                <Input restructure={true} authorized={authorized} setAuthorized={setAuthorized} name="create_pass" placeholder="Enter Password" type="text" />
                <Input restructure={true} authorized={authorized} setAuthorized={setAuthorized} name="r_password" placeholder="Re-enter Password" type="text" />
            </FlexBox2>

            <Footer>
                <div></div>
                <Buttons>
                    <button onClick={nextBtnHandler}>Next</button>
                </Buttons>
            </Footer>
        </Container>
    )
}

export default NewPassword;

const FlexBox2 = styled(FlexBox)`
    text-align: center;
    flex-direction: column;
`