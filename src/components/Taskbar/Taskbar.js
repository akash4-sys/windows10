import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import StartMenu from './StartMenu/StartMenu';
import SearchBar from './utils/SearchBarStyle';
import Battery from './utils/Battery';
import { Showtime, Showdate } from './utils/Showtime';
import OutsideClickAlert from './utils/OutsideClickAlert';

function Taskbar() {

    const [displayStartMenu, setDisplayStartMenu] = useState(false);
    const wrapperRef = useRef(null);
    OutsideClickAlert(wrapperRef, setDisplayStartMenu);
    
    function startMenu() {
        if (displayStartMenu) {
            setTimeout(() => { setDisplayStartMenu(false); }, 10);
        } else {
            setDisplayStartMenu(true);
        }
    }

    useEffect(() => {
        Showtime();
        Showdate();
        Battery();
    }, []);

    return (
        <Container ref={wrapperRef}>
            <LeftSection>
                <StartMenu displayStartMenu={displayStartMenu} />
                <WindowsButton onClick={startMenu}>
                    <i className="fa-brands fa-windows"></i>
                    <Tooltip>Start</Tooltip>
                </WindowsButton>
                <SearchBar> <div className="gcse-search" ></div> </SearchBar>
                <TaskbarButton>
                    <i className="fa-solid fa-bars"></i>
                    <Tooltip style={{ fontSize: "12.5px" }}>Task View</Tooltip>
                </TaskbarButton>
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
                <UtilityIcons>
                    <i className="fa-solid fa-chevron-up"></i>
                    <Tooltip >Show hidden icons</Tooltip>
                </UtilityIcons>
                <UtilityIcons>
                    <i className="fa-solid fa-volume-high"></i>
                    <Tooltip >Speaker/Headphone: 80%</Tooltip>
                </UtilityIcons>
                <UtilityIcons id="batteryicon">
                    <Tooltip id="batterytip"></Tooltip>
                    <i className='fas fa-battery-empty'></i>
                </UtilityIcons>
                <UtilityIcons>
                    <i className="fa-solid fa-wifi"></i>
                    <Tooltip >Internet Access</Tooltip>
                </UtilityIcons>
                <UtilityIcons id="eng">
                    ENG
                    <Tooltip >Keyboard</Tooltip>
                </UtilityIcons>
                <DateAndTime>
                    <div id="ClockDisplay"></div>
                    <div id="DateDisplay"></div>
                    <Tooltip id="Datetooltip"></Tooltip>
                </DateAndTime>
                <TaskbarButton>
                    <img src="./Images/notificationb.png" alt="notification" style={{ width: '22px', paddingTop: '4px' }} />
                    <Tooltip className="Notificationtooltip">No new notifications</Tooltip>
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
    background-color: var(--primary-color);
    display:flex;
    justify-content: space-between;
`

const LeftSection = styled.div`
    display:flex;
    position:relative;
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

const Visible = keyframes`
    to{
        opacity:1;
    }
`

const WindowsButton = styled.button`
    font-size: 1.3rem;
    padding: 0px 15px;
    background-color: grey;
    border: none;
    transition: all 250ms;
    position: relative;
    
    span{
        font-size: 12.5px;
    }
    &:hover{
        color:#357EC7;
        background-color: var(--hover-color);
        span{
            animation: ${Visible} 10ms linear 500ms forwards;
        }
    }
`

const TaskbarButton = styled.div`
    padding: 6px 11px;
    transition: all 250ms;
    color:var(--textcolor);
    position: relative;

    img{
        width: 29px;
    }

    &:hover{
        background-color:var(--hover-color);
        span{
            animation: ${Visible} 10ms linear 500ms forwards;
        }
    }

    i{
        padding-top: 6px;
        padding-left: 6px;
        padding-right: 6px;
    }

    .Notificationtooltip{
        left:unset;
        right:0%;
    }
`

const UtilityIcons = styled(TaskbarButton)`
    padding-left: 2px;
    padding-right: 2px;
    position: relative;
      
    &:hover{
        span{
            animation: ${Visible} 10ms linear 500ms forwards;
        }
    }
`

const Breaker = styled.div`
    font-size: 1.5rem;
    padding: 4px 15px;
    color: #646363;
    display: flex;
    gap: 2px;
    div, span{
        border: 0.1px solid black;
        height: -webkit-fill-available;
    }
`

const Tooltip = styled.span`
    opacity:0;
    width: max-content;
    background-color:#FBFBF8;
    color:black;
    text-align: center;
    padding: 2px 5px;
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -20px;
`

const DateAndTime = styled.div`
    color: var(--textcolor);
    text-align: center;
    padding: 3px 8px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: all 250ms;
    position: relative;

    span{
        width:fit-content;
        left: 0%;
        margin-left: -1px;
    }

    &:hover{
        background-color:var(--hover-color);
        span{
            animation: ${Visible} 10ms linear 500ms forwards;
        }
    }
`