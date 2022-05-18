import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { AppWindowContext } from '../../ContextApi/Context';

function ThisPCWindow() {
    const [AppWindow, setAppWindow] = useContext(AppWindowContext);

    // console.log(AppWindow)
    if (AppWindow["ThisPC"].show) {
        return (
            <Container id="thisPcWindow">
                
            </Container>
        )
    }
}

export default ThisPCWindow;

const AppearAnimation = keyframes`

`

const Container = styled.div`
    position: absolute;
    height: calc(70% - 2.5rem);
    width:100%;
    background-color:white;
    top:50px;
    // left:50px;
    animation:${AppearAnimation} 100ms ease-in;
`