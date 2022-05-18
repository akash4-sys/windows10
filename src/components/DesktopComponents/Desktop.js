import React, { useState } from 'react';
import styled from 'styled-components';
import handleKey from './utils/KeyHandler';
import AppsLayer from './AppsLayer/AppsLayer';
import { AppWindowContext } from '../ContextApi/Context';
import ThisPCWindow from '../Window/ThisPCWindow/ThisPCWindow';

function Desktop() {

    const [ AppWindow, setAppWindow ] = useState({ 
        "ThisPC":{ show: false, count:0 },
        "ThisPCProperties":{ show: false, count:0},
        "Chrome":{ show:false, count:0 },
        "ChromeProperties":{ show: false, count:0 }
    })

    return (
        <DesktopPage tabIndex="0" onKeyDown={handleKey}>
            <BackGroundImageContainer>
                <AppWindowContext.Provider value={[ AppWindow, setAppWindow ]}>

                    <AppsLayer />
                    <ThisPCWindow />

                </AppWindowContext.Provider>
            </BackGroundImageContainer>
        </DesktopPage>
    )
}

export default Desktop;

const DesktopPage = styled.section`
    width:100vw;
    height:100vh;
`

const BackGroundImageContainer = styled.div`
    background-image: url('Images/windows.jpg');
    background-size: cover;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
`