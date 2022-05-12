import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import SideNavbar from './SideNavbar'

export default function StartMenu(props) {
    
    if(props.displayStartMenu){
        return (
            <Container id="startmenu">
               <SideNavbar/>
            </Container>
        )
    }
};

const menuAppearAnimation = keyframes`
    from{
        height:85vh;
    }
    to{
        height:90vh;
    }
`

const Container = styled.div`
    position: absolute;
    left:0%;
    bottom:2.5rem;
    height:90vh;
    width:90%;
    background-color:var(--startbg);
    opacity:0.98;
    animation:${menuAppearAnimation} 30ms ease-in;
    transition:height 10ms;
`