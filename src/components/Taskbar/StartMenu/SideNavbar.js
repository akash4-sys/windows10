import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import './CSS/Sidenavbar.css'

function SideNavbar() {

    const [displayOptions, setDisplayOptions] = useState(false);
    const powerBtnRef = useRef(null);
    const wrapperRef = useRef(null);

    OutsideClickAlert(wrapperRef);

    function OutsideClickAlert(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target) && !powerBtnRef.current.contains(event.target)) {

                    let Navbar = document.getElementById('navbar');
                    Navbar.classList.add('navbar');
                    Navbar.classList.remove('fixedNavbar');
                    document.getElementById('powerlist').style.opacity = 0;
                    setTimeout(() => { setDisplayOptions(false); }, 10);

                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };

        }, [ref]);
    };

    function PowerButtonhandler() {
        let Navbar = document.getElementById('navbar');
        
        if (displayOptions) {
            
            Navbar.classList.add('navbar');
            Navbar.classList.remove('fixedNavbar');            
            document.getElementById('powerlist').style.opacity = 0;
            setTimeout(() => { setDisplayOptions(false); }, 10);

        } else {

            let width = getComputedStyle(Navbar).width;
            Navbar.classList.remove('navbar');
            setDisplayOptions(true);
            if(width === "272px" ){
                Navbar.classList.add('fixedNavbar');
            }
        }
    }

    return (
        <>
            <Navbar id="navbar" className="navbar">
                <Top className="tools">
                    <img src="Images/navmenub.png" alt="nav" />
                    <span>START</span>
                </Top>
                <Bottom>
                    <div className="tools">
                        <img src="Images/userb.png" alt="user" style={{ height: "24px", width: "24px" }} className="user_start_icon" />
                        <span>Peter</span>
                    </div>
                    <div className="tools">
                        <img src="Images/documentb.png" alt="document" />
                        <span>Document</span>
                    </div>
                    <div className="tools">
                        <img src="Images/picturesb.png" alt="pictures" />
                        <span>Pictures</span>
                    </div>
                    <div className="tools">
                        <img src="Images/settingsb.png" alt="settings" />
                        <span>Settings</span>
                    </div>
                    <div className="tools" id="powerbtn" ref={powerBtnRef} onClick={PowerButtonhandler}>
                        <img src="Images/shutdownb.png" alt="shutdown" />
                        <span>Power</span>
                    </div>
                </Bottom>
            </Navbar>
            {
                displayOptions &&
                <Power id="powerlist" ref={wrapperRef}>
                    <li>
                        <img src="Images/sleepb.png" alt="sleep"/>
                        <div>Sleep</div>
                    </li>
                    <li>
                        <img src="Images/shutdownb.png" alt="shutdown" />
                        <div>Shut down</div>
                    </li>
                    <li>
                        <img src="Images/restartb.png" alt="restart" />
                        <div>Restart</div>
                    </li>
                </Power>
            }
        </>
    )
}

export default SideNavbar;

const Navbar = styled.nav`
    height:100%;
    width:3.05rem;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
    position:absolute;
    opacity:0.98;
    color:var(--textcolor);
`

const Top = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    gap: 1.75rem;
    height: 50px;
    justify-content: center;
    transition: all 250ms;

    img{
        height:20px;
        width:20px;
    }

    span{
        display:none;
        visibility:hidden;
    }

    &:hover{
        background-color:var(--hover-color);
    }
`
const Bottom = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    transition: all 250ms;

    div{
        display:flex;
        align-items: center;
        width: 100%;
        gap: 1.75rem;
        height: 50px;
        justify-content: center;

        &:hover{
            background-color:var(--hover-color);
        }
    }

    img{
        height:20px;
        width:20px;
    }

    span{
        display:none;
        visibility:hidden;
    }
`

const settingOptions = keyframes`
    from{
        height:20px;
    }
    to{
        height:38px;
    }
`

const Power = styled.ul`
    position: absolute;
    z-index: 1;
    background-color: var(--primary-color);
    width: 16.9rem;
    transition: all 10ms;
    bottom: 50px;
    left: 0px;
    padding: 0px;
    margin: 0px;
    border: 2px solid dimgrey;
    color:var(--textcolor);

    li{
        list-style: none;
        display:flex;
        align-items: center;
        gap: 0.75rem;
        height: 38px;
        padding-left: 15px;
        font-size: 12px;
        animation: ${settingOptions} 100ms ease-in;

        img{
            width:20px;
            height:20px;
        }

        &:hover{
            background-color:var(--hover-color);
        }
    }
`