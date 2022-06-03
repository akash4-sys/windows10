import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {

    styled, keyframes, nanoid, ActionBar, WindowSearchBar, handleWindowClick, handleWindowResizing, WindowToolBar, ThispcToolbar,
    handleWindowMousemove, QuickAccessBar, WindowFooter,removeAppfromTaskbar, 
    focusTaskbarApp, minimizedTaskbarApp, setAppWindow, minimizeAppWindowDirect

} from './index.js';

 
function Window({ 
    windowsName, windowIcon, windowNameBar, showFaqBar, windowToolbar, thispcToolbar, 
    windowSearchBar, MainContent, quickAccessConfig , footerConfig, AppWindow
}) {

    const dispatch = useDispatch()
    const windowsRef = useRef();
    let numberOfWindow = AppWindow.count;

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

    if (AppWindow.show) {
        return (
            <>
                {
                    [...Array(numberOfWindow)].map((e,i) => (
                        <Container key={nanoid()} id={generateId(i)} 
                            onClick={(e) => handleWindowClick({
                                e, windowsRef, positionArray, windowSizeArray, setAppWindow, windowsName,
                                removeAppfromTaskbar, dispatch, focusTaskbarApp, minimizedTaskbarApp, minimizeAppWindowDirect
                            })}
                            style={{ 
                                zIndex:0,
                                left: positionArray.current[i][0],
                                top: positionArray.current[i][1],
                                height: windowSizeArray.current[i][0],
                                width: windowSizeArray.current[i][1]
                            }}
                            onMouseDown={(e) => handleWindowResizing(e, windowSizeArray)}
                            onMouseMove={handleWindowMousemove}
                            className={ AppWindow.minimized[i] ? "minimizeAnimation" : null }
                        >

                            <ActionBarContainer>
                                { windowNameBar }
                                {i}
                                <ActionBar ref={refContainer} showFaqBar={showFaqBar} />
                            </ActionBarContainer>

                            { windowToolbar.show && <WindowToolBar Height={windowToolbar.height} /> }
                            { thispcToolbar.show && <ThispcToolbar Height={thispcToolbar.height}/> }

                            {   
                                windowSearchBar.show && 
                                <WindowSearchBar windowIcon={windowIcon} windowName={windowsName} Height={windowSearchBar.height}/> 
                            }

                            <ContentContainer style={{ height:`calc(100% - ${windowSearchBar.height} - ${windowToolbar.height} - 3.4rem)`}}>
                                <UpperContent style={{ height: `calc(100% - ${footerConfig.height})`}}>
                                    { quickAccessConfig.show && <QuickAccessBar Width={ quickAccessConfig.width } /> }
                                    { MainContent }
                                </UpperContent>
                                {
                                    footerConfig.show && 
                                    <LowerContent style={{ height: footerConfig.height}}>
                                        { footerConfig.show &&  <WindowFooter /> }
                                    </LowerContent> 
                                }
                            </ContentContainer>

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
    animation:${AppearAnimation} 5ms ease-in;
    color:black;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
    overflow:auto;
    max-height: calc(100vh - 2.5rem);
    font-size:var(--windowsFontSize);
    height:calc(70% - 2.5rem);
    width:70%;
`

const ActionBarContainer = styled.div`
    height:3rem;
    width:100%;    
    display: flex;
    align-items: center;
    justify-content:space-between;
`

const ContentContainer = styled.div`
    overflow: hidden;
`

const UpperContent = styled.div`
    width: 100%;
    display:flex;
`

const LowerContent = styled(UpperContent)`
    width: 100%;
`