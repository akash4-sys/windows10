import React, { useContext, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { nanoid } from 'nanoid';
import { AppWindowContext } from './../ContextApi/Context';
import ActionBar from './WindowComponents/ActionBar';
import handleWindowClick from './utils/handleWindowClick';
import { handleWindowResizing, handleWindowMousemove } from './utils/handleWindowResizing';
import WindowToolBar from './WindowComponents/Toolbars/WindowToolBar';
import ThispcToolbar from './ThisPCWindow/components/ThispcToolbar';
 
function Window({ windowsName, WindowNameBar, showFaqBar, showWindowToolBar, showThisPCtoolbar }) {
    const [AppWindow, setAppWindow] = useContext(AppWindowContext);
    const windowsRef = useRef();
    let numberOfWindow = AppWindow[windowsName].count;

    //left, top
    const positionArray = useRef([ ["200px", "100px"] ]);
    const windowSizeArray = useRef([]);
    const refContainer = useRef({ windowsRef, positionArray, windowSizeArray });
    
    function generateId(i) {
        let id = nanoid() + "_index" + i;
        windowsRef.current = id;
        positionArray.current.push(["200px", "100px"]);
        windowSizeArray.current.push(["calc(70% - 2.5rem)", "70%"]);
        return id;
    }

    if (AppWindow[windowsName].show) {
        return (
            <>
                {
                    [...Array(numberOfWindow)].map((e,i) => (
                        <Container key={nanoid()} id={generateId(i)} 
                            onClick={(e) => handleWindowClick(e, windowsRef, positionArray, windowSizeArray, setAppWindow, AppWindow, windowsName)} 
                            style={{ 
                                zIndex:0,
                                left: positionArray.current[i][0],
                                top: positionArray.current[i][1],
                                height: windowSizeArray.current[i][0],
                                width: windowSizeArray.current[i][1]
                            }}
                            onMouseDown={(e) => handleWindowResizing(e, windowSizeArray)}
                            onMouseMove={handleWindowMousemove}
                        >

                            <ActionBarContainer>
                                { WindowNameBar }
                                <ActionBar ref={refContainer} showFaqBar={showFaqBar} />
                            </ActionBarContainer>

                            { showWindowToolBar && <WindowToolBar /> }
                            { showThisPCtoolbar && <ThispcToolbar /> }

                            <h1 onClick={(e) => e.target.style.color = "red"}>{windowsName + i}</h1>

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
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
    overflow:auto;
`

const ActionBarContainer = styled.div`
    height:3rem;
    width:100%;    
    display: flex;
    align-items: center;
    justify-content:space-between;
`