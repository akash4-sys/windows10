import React from 'react';
import styled, { keyframes } from 'styled-components';
import SideNavbar from './SideNavbar';
import AppList from './AppList';
import AppsGrid from './AppsGrid';

export default function StartMenu({ setDisplayStartMenu, displayStartMenu }) {

    if(displayStartMenu){
        return (
            <Container id="startmenu">
               <SideNavbar/>
               <FlexBox>
                    <AppList setDisplayStartMenu={setDisplayStartMenu} />
                    <AppsGrid setDisplayStartMenu={setDisplayStartMenu} />
               </FlexBox>
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
    width:42rem;
    background-color:var(--startbg);
    opacity:0.98;
    animation:${menuAppearAnimation} 30ms ease-in;
    transition:height 10ms;
    z-index: 10000;
`

const FlexBox = styled.div`
    display:flex;
    margin-left:3.05rem;
    height:100%;
`