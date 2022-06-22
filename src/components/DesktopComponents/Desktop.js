import React, { useEffect } from 'react';
import styled from 'styled-components';
import handleKey from './utils/KeyHandler';
import AppsLayer from './AppsLayer/AppsLayer';
import ThisPCWindow from '../Window/ThisPCWindow/ThisPCWindow';
import ChromeWindow from '../Window/ChromeWindow/ChromeWindow';
import FileExplorerWindow from '../Window/FileExplorerWindow/FileExplorerWindow';
import MyPortfolio from '../Window/MyPortfolioWindow/MyPortfolio';
import Notepad from '../Window/NotepadWindow/Notepad';
import PokemonGameWindow from '../Window/PokemonGameWindow/PokemonGameWindow';
import Whiteboard from '../Window/WhiteboardWindow/Whiteboard';

function Desktop() {

    function fullScreen() {
        document.getElementById('root').requestFullscreen();
        document.getElementById('root').removeEventListener('click',fullScreen); 
    }

    useEffect(() => {
        document.getElementById('root').addEventListener('click', fullScreen);
    }, [])

    return (
        <DesktopPage tabIndex="0" onKeyDown={handleKey}>
            <BackGroundImageContainer>

                <WindowCollision id="windowCollisionBox" />
                <CursorAnimationCircle id="CursorAnimationCircle" />

                <AppsLayer />
                <ThisPCWindow />
                <ChromeWindow />
                <FileExplorerWindow />
                <MyPortfolio />
                <Notepad />
                <PokemonGameWindow />
                <Whiteboard />

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

const WindowCollision = styled.div`
    position: absolute;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    background-color: transparent;
    border:1px solid dimgray;
    z-index:calc( var(--topWindowIndex) - 1 );
`

const CursorAnimationCircle = styled.div`
    border: 3px solid var(--windowsBlue);
    display:none;
    position: absolute;
    z-index:calc( var(--topWindowIndex) + 1 );
`