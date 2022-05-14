import React from 'react';
import styled from 'styled-components';
import { hoverEffect, cancelHoverEffect } from '../utils/WindowsHoverEffect';
import Apps from '../../Data/AppData';

function AppList() {
    return (
        <Container>
            <List>
                {
                    Apps.map((app, i) => (
                        <App key={i} onMouseMove={hoverEffect} onMouseLeave={(e) => cancelHoverEffect(e, "transparent")}>
                            { app[0] && <img src={app[0]}  alt="app"/> }
                            <div>{app[1]}</div>
                        </App>
                    ))
                }
            </List>
        </Container>
    )
}

export default AppList;

const Container = styled.div`
    height:100%;
    width:46%;
    overflow:auto;
    font-size:13px;

    &::-webkit-scrollbar{
        width:3px;
    }

    &::-webkit-scrollbar-thumb{
        border-radius:5px;
    }

    &:hover::-webkit-scrollbar-thumb{
        background-color:var(--hover-color);
    }

    ::-webkit-scrollbar-track:hover{
        background: gray; 
    }
`

const List = styled.ul`
    margin:5px 8px 0px;
    padding:0px;
`

const App = styled.li`
    list-style:none;
    display:flex;
    height:38px;
    align-items:center;
    gap:6px;
    transition:all 100ms;
    padding-left:10px;
	border: 1px solid transparent;

    img{
        height:30px;
        width:30px;
    }

    &:hover{
        background-color:var(--hover-color);
    }

    &:active{
        img{
            zoom:0.95;
        }
        div{
            zoom:0.95;
        }
    }
`