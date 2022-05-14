import React from 'react';
import styled from 'styled-components';
import handleKey from './utils/KeyHandler';

function Desktop() {
    return (
        <DesktopPage tabIndex="0" onKeyDown={handleKey}>
            <Container>

            </Container>
        </DesktopPage>
    )
}

export default Desktop;

const DesktopPage = styled.section`
    width:100vw;
    height:100vh;
`

const Container = styled.div`
    background-image: url('Images/windows.jpg');
    background-size: cover;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
`