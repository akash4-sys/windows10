import React, { useEffect, useRef, forwardRef, useState, useContext } from 'react';
import styled from 'styled-components';
import { AppWindowContext } from '../../ContextApi/Context';

const ActionBar = forwardRef(( {windowsName}, windowsRef ) => {

    const posRef = useRef({ X: 0, Y: 0 });
    const [AppWindow, setAppWindow] = useContext(AppWindowContext);

    function handleMouseDown(e) {
        let parentWindow = document.getElementById(windowsRef.current);
        e.preventDefault();
        posRef.current.X = e.clientX;
        posRef.current.Y = e.clientY;
        parentWindow.addEventListener('mousemove', update);
        window.addEventListener('mouseup', () => {
            parentWindow.removeEventListener('mousemove', update)
            posRef.current.X = 0;
            posRef.current.Y = 0;
        });
    };

    function update(e) {
        let parentWindow = document.getElementById(windowsRef.current);
        let posX = posRef.current.X - e.clientX;
        let posY = posRef.current.Y - e.clientY;
        posRef.current.X = e.clientX;
        posRef.current.Y = e.clientY;
        parentWindow.style.left = `${parentWindow.offsetLeft - posX}px`;
        parentWindow.style.top = `${parentWindow.offsetTop - posY}px`;
    };

    function closeWindow() {
        setAppWindow( { ...AppWindow, [windowsName] : { show: true, count: AppWindow[windowsName].count - 1 }  })
        if(!AppWindow[windowsName].count){
            setAppWindow( { ...AppWindow, [windowsName] : { show: false }  })
        }
        var root = document.querySelector(':root');
        root.style.setProperty('--topWindowIndex', 0);
    }

    return (
        <Container>
            <LeftSection>

            </LeftSection>
            <MoveSection onMouseDown={handleMouseDown} >

            </MoveSection>
            <RightSection onClick={closeWindow}>
            </RightSection>
        </Container>
    )
})

export default ActionBar;

const Container = styled.div`
    background-color:cyan;
    height:3.5rem;
    width:100%;    
    display: flex;
    align-items: center;
`

const LeftSection = styled.div`
    height:inherit;
    width:15%;
    background-color:cyan;

    @media(max-width:768px){
        width:30%;
    }
`
const MoveSection = styled.div`
    height:inherit;
    width:75%;
    flex-shrink:1;
    background-color:black;

    @media(max-width:768px){
        width:50%;
    }
`
const RightSection = styled.div`
    height:inherit;
    width:20%;
    background-color:purple;
`