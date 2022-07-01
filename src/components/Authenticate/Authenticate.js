import React, { useState } from 'react';
import styled from 'styled-components';
import CreateAccount from './CreateAccount';
import Login from './Login';

function Authenticate() {

    const [ login, setLogin ] = useState(true)

    return (
        <Screen>
            <Container>
                {
                    login ? <Login setLogin={setLogin}/> : <CreateAccount setLogin={setLogin}/>
                }
            </Container>
        </Screen>
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