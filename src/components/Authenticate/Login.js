import React from 'react';
import styled from 'styled-components';
import Input from './utils/Input';

function Login({setLogin}) {

    function Back(){
        setLogin(false);
    }

    return (
        <Container>
            <h1>Make it yours</h1>
            <p>Your Microsoft account opens a world of benefits. Sign in for your personalized experience.
                <span> Learn <br /> more.</span>
            </p>
            <Input placeholder="Email or phone" type="email" />
            <Input placeholder="Password" type="email" />
            <p style={{ color: "lightblue" }}>Forgot my password</p>
            <p style={{ marginTop: "2rem" }}>No account?
                <span onClick={Back}> Create One!</span>
            </p>
            <Footer>
                <i className="fa-solid fa-clock-rotate-left"></i>
                <Buttons>
                    <button>Next</button>
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
        font-weight:200;
        margin-top:5rem;   
    }
    span{
        color:lightblue;
    }

    p{ margin: 1.5rem 0px; }
`

const Footer = styled.div`
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;

    i{ font-size:2rem; }
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