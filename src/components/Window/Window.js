import React, { useContext, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { nanoid } from 'nanoid';
import { AppWindowContext } from './../ContextApi/Context';
import ActionBar from './WindowComponents/ActionBar';
import handleWindowClick from './utils/handleWindowClick';
import WindowToolBar from './WindowComponents/Toolbars/WindowToolBar';
import ThispcToolbar from './ThisPCWindow/components/ThispcToolbar';
 
function Window({ windowsName, WindowNameBar, showFaqBar, showWindowToolBar, showThisPCtoolbar }) {
    const [AppWindow, setAppWindow] = useContext(AppWindowContext);
    const windowsRef = useRef();
    let numberOfWindow = AppWindow[windowsName].count;

    //left, top
    const positionArray = useRef([ ["200px", "100px"] ]);
    const refContainer = useRef({ windowsRef, positionArray });
    
    function generateId(i) {
        let id = nanoid() + "_index" + i;
        windowsRef.current = id;
        positionArray.current.push(["200px", "100px"]);
        return id;
    }

    if (AppWindow[windowsName].show) {
        return (
            <>
                {
                    [...Array(numberOfWindow)].map((e,i) => (
                        <Container key={nanoid()} id={generateId(i)} 
                            onClick={(e) => handleWindowClick(e, windowsRef, positionArray, setAppWindow, AppWindow, windowsName)} 
                            style={{ 
                                zIndex:0,
                                left: positionArray.current[i][0],
                                top: positionArray.current[i][1],
                                height:"calc(70% - 2.5rem)",
                                width:"70%"
                            }}>

                            <ActionBarContainer>
                                { WindowNameBar }
                                <ActionBar ref={refContainer} showFaqBar={showFaqBar} />
                            </ActionBarContainer>

                            { showWindowToolBar && <WindowToolBar /> }
                            { showThisPCtoolbar && <ThispcToolbar /> }

                            <h1>{windowsName + i}</h1>

                        </Container>
                    ))
                }
            </>
        )
    }
}

export default Window;

const AppearAnimation = keyframes`
    from{ transform: scale(0.1) }
    to{ transform: scale(1); }
`

const Container = styled.div`
    position: absolute;
    background-color:white;
    transform: scale(1);
    animation:${AppearAnimation} 30ms ease-in;
    color:black;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`

const ActionBarContainer = styled.div`
    height:3rem;
    width:100%;    
    display: flex;
    align-items: center;
    justify-content:space-between;
`