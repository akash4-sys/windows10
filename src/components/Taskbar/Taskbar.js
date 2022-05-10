import React, { useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './utils/SearchBarStyle';
import Battery from './utils/Battery';
import { Showtime, Showdate } from './utils/Showtime'

function Taskbar() {
    
    useEffect(() => {
        Showtime();
        Showdate();
        Battery();
    }, [])

    return (
        <Container>
            <LeftSection>
                <WindowsButton><i className="fa-brands fa-windows"></i></WindowsButton>
                <SearchBar> <div className="gcse-search" ></div> </SearchBar>
                <TaskbarButton><i className="fa-solid fa-bars"></i></TaskbarButton>
                <Breaker><div></div><span></span></Breaker>
                <TaskbarButton>
                    <img src="./Images/fileexplorer.png" alt="file_explorer" />
                </TaskbarButton>
                <TaskbarButton>
                    <img src="./Images/mail.png" alt="mail" />
                </TaskbarButton>
                <TaskbarButton>
                    <img src="./Images/chrome.png" alt="chrome" />
                </TaskbarButton>
                <TaskbarButton>
                    <img src="./Images/vscode.png" alt="vscode" />
                </TaskbarButton>
            </LeftSection>
            <RightSection>
                <UtilityIcons><i className="fa-solid fa-chevron-up"></i></UtilityIcons>
                <UtilityIcons><i className="fa-solid fa-volume-high"></i></UtilityIcons>
                <UtilityIcons id="batteryicon"></UtilityIcons>
                <UtilityIcons><i className="fa-solid fa-wifi"></i></UtilityIcons>
                <UtilityIcons id="eng">ENG</UtilityIcons>
                <DateAndTime>
                    <div id="ClockDisplay"></div>
                    <div id="DateDisplay"></div>
                </DateAndTime>
                <TaskbarButton>
                    <img src="./Images/notification.png" alt="notification" style={{width:'22px', paddingTop:'4px'}}/>
                </TaskbarButton>
            </RightSection>
        </Container>
    )
}

export default Taskbar;

const Container = styled.div`
    width:100%;
    height:2.5rem;
    position: absolute;
    bottom: 0.5px;
    background-color: grey;
    display:flex;
    justify-content: space-between;
`

const LeftSection = styled.div`
    display:flex;
`

const RightSection = styled.div`
    display:flex;
    font-size: 12.5px;

    #eng{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        padding-top:11px;
    }
    #batteryicon{
        font-size:1rem;
        padding-top:4px;
    }
`

const WindowsButton = styled.button`
    font-size: 1.3rem;
    padding: 0px 15px;
    background-color: grey;
    border: none;
    transition: all 250ms;
    
    &:hover{
        color:#357EC7;
        background-color: #aeaeae;
    }
`

const TaskbarButton = styled.div`
    padding: 6px 11px;
    transition: all 250ms;
    color:white;

    img{
        width: 29px;
    }

    &:hover{
        background-color:#aeaeae;
    }

    i{
        padding-top: 6px;
        padding-left: 6px;
        padding-right: 6px;
    }
`

const UtilityIcons = styled(TaskbarButton)`
    padding-left: 2px;
    padding-right: 2px;
    
    i{
    }
`

const Breaker = styled.div`
    font-size: 1.5rem;
    padding: 4px 15px;
    color: #646363;
    display: flex;
    gap: 2px;
    div, span{
        border: 0.1px solid white;
        height: -webkit-fill-available;
    }
`

const DateAndTime = styled.div`
    color: white;
    text-align: center;
    padding: 3px 8px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: all 250ms;

    &:hover{
        background-color:#aeaeae;
    }
`