import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

function WindowNameBar({ windowsName, windowIcon, windowBarOptions }) {

    return (
        <>
            <LeftSection>
                <Up>
                    <Box><img src={windowIcon} alt="pc" /></Box>
                    <Breaker />
                    <Box className="actionBarElementHover"><img src="Images/properties.ico" alt="prop" /></Box>
                    <Box className="actionBarElementHover"><img src="Images/openfolder.ico" alt="f" /></Box>
                    <Box className="actionBarElementHover"><img src="Images/undo.ico" alt="pc" /></Box>
                    <Box className="actionBarElementHover"><img src="Images/uparrow.png" alt="pc" /></Box>
                    <Breaker2 />
                    <WindowName>{windowsName}</WindowName>
                </Up>
                <Down>
                    <div className="fileWindowOption">File</div>
                    {
                        windowBarOptions && 
                        windowBarOptions.map((opt, i) => (
                            <div key={nanoid()}>{opt}</div>
                        ))
                    }
                </Down>
            </LeftSection>
        </>
    )
}

export default WindowNameBar;

const LeftSection = styled.div`
    height:inherit;
    font-size: 13px;
`

const Up = styled.div`
    height:42.86%;
    display:flex;
    padding-top:1%;

    .actionBarElementHover:hover{
        background-color:var(--windowsHover);
        outline: 0.001px solid var(--windowsSelect);;
    }
`

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:100%;
    width:22px;

    img{
        height:16px;
        width:16px;
    }
`

const Breaker = styled.div`
    height:60%;
    border:0.001px solid var(--hover-color); 
    margin-top: 3.6%;
    margin-left: 2px;
    margin-right: 10px;
`

const Breaker2 = styled(Breaker)`
    margin-left: 5px;
    margin-right: 7px;
`

const WindowName = styled.div`
    width: max-content;
    height: 100%;
    display: flex;
    align-items: center;
    min-width:50px;
`

const Down = styled.div`
    height:47%;
    padding-top:2%;
    display: flex;
    align-items: center;

    .fileWindowOption{
        background-color:var(--windowsBlue);
        padding:0px 20px;
        color:white;
    }

    div{
        height:100%;
        display: flex;
        align-items: center;
        padding:0px 10px;
        font-size:var(--WindowtoolBarFontSize);
    }

    div:nth-child(2){
        background-color:var(--WindowtoolBarBGC);
        border-top: 0.7px solid var(--linecolor);
        border-right: 0.7px solid var(--linecolor);
    }
`