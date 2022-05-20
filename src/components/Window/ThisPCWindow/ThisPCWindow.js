import React, { useState, useContext, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { nanoid } from 'nanoid';
import { AppWindowContext } from '../../ContextApi/Context';
import ActionBar from '../WindowComponents/ActionBar';

function ThisPCWindow() {
    const [AppWindow, setAppWindow] = useContext(AppWindowContext);
    const windowsRef = useRef();
    const [ windowsName, setWindowsName ] = useState("ThisPC");
    
    let numberOfWindow = AppWindow["ThisPC"].count;
    // let positionArray = new Array(numberOfWindow);
    
    function generateId() {
        let key = nanoid();
        windowsRef.current = key;
        return key;
    }

    function handleWindowClick(e) {
        windowsRef.current = e.currentTarget.id;
        var root = document.querySelector(':root')
        var r = getComputedStyle(root);
        var topWindowIndex = parseInt(r.getPropertyValue("--topWindowIndex"));
        let zindex = parseInt(e.currentTarget.style.zIndex);
        if(zindex < topWindowIndex){
            e.currentTarget.style.zIndex = topWindowIndex;
            root.style.setProperty('--topWindowIndex', topWindowIndex+1);
        }else{
            root.style.setProperty('--topWindowIndex', zindex);
        }
    }

    if (AppWindow["ThisPC"].show) {
        return (
            <>
                {
                    [...Array(numberOfWindow)].map((e,i) => (
                        <Container key={nanoid()} id={generateId()} onClick={handleWindowClick} style={{ zIndex:0 }}>
                            <ActionBar ref={windowsRef} windowsName={windowsName}/>
                            <h1>{i}</h1>
                        </Container>
                    ))
                }
            </>
        )
    }
}

export default ThisPCWindow;

const AppearAnimation = keyframes`
    from{ transform: scale(0.1) }
    to{ transform: scale(1); }
`

const Container = styled.div`
    position: absolute;
    height: calc(70% - 2.5rem);
    width:50%;
    background-color:white;
    transform: scale(1);
    animation:${AppearAnimation} 30ms ease-in;
    top:50px;
    left:0;
    color:black;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`