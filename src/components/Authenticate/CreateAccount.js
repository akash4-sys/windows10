import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Input from './utils/Input'

function CreateAccount({ setLogin }) {

    const cntRef = useRef();
    useEffect(() => {
        let input = cntRef.current.querySelector('input');
        input.focus();
        input.click();
    }, []);

    function Back(){
        setLogin(true);
    }

    return (
        <Container ref={cntRef}>
            <h1>Create an account for this PC</h1>
            <p style={{margin:"1.5rem 0"}}>If you want to use a password, choose something that will be easy for you to remember but hard for
                <br/> others to guess.
            </p>
            <p>Who's going to use this PC?</p>
            <Input placeholder="Username" type="text"/>
            <p>Your Microsoft account opens a world of benefits. Sign in for your personalized experience.
                <span> Learn <br /> more.</span>
            </p>
            <Input placeholder="Email or phone" type="email" />
            <p>Make it secure</p>
            <Input placeholder="Enter Password" type="text"/>
            <Input placeholder="Re-enter Password" type="text"/>
            <Input placeholder="Password hint" type="text"/>
            <Footer>
                <i className="fa-solid fa-clock-rotate-left"></i>
                <Buttons>
                    <button onClick={Back}>Back</button>
                    <button>Next</button>
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