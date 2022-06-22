import React from 'react';
import styled from 'styled-components';

function Namebar({ windowsName }) {
    return (
        <Container>
            <WindowName>{windowsName}</WindowName>
        </Container>
    )
}

export default Namebar;

const Container = styled.div`
    height:100%;
`

const WindowName = styled.div`
    height:29px;
    display:flex;
    align-items:center;
    gap:7px;
    background:#333333;
    width:max-content;
    font-size:13px;
    color:white;
    padding-left:10px;
    box-shadow: 0px -100vw 0px 100vw #333333;
`