import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as Close } from '../../svg/close.svg';

function Notifications() {

    let [online, isOnline] = useState(navigator.onLine);

    const setOnline = () => {
        isOnline(true);
    };
    const setOffline = () => {
        isOnline(false);
    };

    useEffect(() => {
        window.addEventListener('offline', setOffline);
        window.addEventListener('online', setOnline);

        setTimeout(() => {
            isOnline(true);
        }, 10000)

        return () => {
            window.removeEventListener('offline', setOffline);
            window.removeEventListener('online', setOnline);
        }
    }, []);

    function closeNotification(){
        isOnline(true);
    }

    if (!online) {
        return (
            <Notification>
                <img src="Images/wifioff.png" alt="wifi_off" />
                <Details>
                    <h4>No Internet</h4>
                    <div>You are not connected to the internet. Some features may not work as intended.</div>
                </Details>
                <Close onClick={closeNotification}/>
            </Notification>
        )
    }
}

export default Notifications;

const animation = keyframes`
    from{ right: -15rem; }
    to{ right:0rem; }
`

const Notification = styled.div`
    height: 7rem;
    width: 23rem;
    background: var(--startbg);
    position: absolute;
    bottom: 4rem;
    right: 0rem;
    display:flex;
    box-sizing:border-box;
    padding: 10px;
    justify-content: center;
    z-index:10000;
    border-radius: 2px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    animation:${animation} 150ms linear;

    img{
        height:40px;
        width:40px;
    }

    svg{ 
        opacity:0;
        height: 1.5rem;
        width: 2rem;
        fill: var(--seclayerColor);
    }

    &:hover{ svg{ opacity: 1; } }

    svg:hover{
        fill:black;
    }
`

const Details = styled.div`
    padding-left:10px;
    h4{
        margin:0px;
        padding:0px;
    }
`