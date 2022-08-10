import React, { useState } from 'react';
import styled from 'styled-components';
import CreateAccount from './CreateAccount';
import VerifyOTP from './VerifyOTP';
import Login from './Login';
import NewPassword from './NewPassword';
import ErrorBoundary from '../Boot/ErrorBoundary';

function Authenticate() {

    const [authMode, setAuthMode] = useState("login");

    function AuthModeHelper() {
        switch (authMode) {
            case 'login': return (<Login setAuthMode={setAuthMode} />)
            case 'createAccount': return (<CreateAccount setAuthMode={setAuthMode} />)
            case 'verifyOTP': return (<VerifyOTP setAuthMode={setAuthMode} />)
            case 'NewPassword': return (<NewPassword setAuthMode={setAuthMode} />)
            default: return (<h1>Something went wrong!!!</h1>)
        }
    }

    return (
        <ErrorBoundary>
            <Screen>
                <Container>
                    {AuthModeHelper()}
                </Container>
            </Screen>
        </ErrorBoundary>
    )
}

export default Authenticate;

const Screen = styled.div`
	height:100vh;
	width:100vw;
	overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    background:black;
`

const Container = styled.div`
    background:#00599c;
    height:95vh;
    width:65vw
`