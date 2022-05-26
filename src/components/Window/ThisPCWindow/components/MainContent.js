import React from 'react';
import styled from 'styled-components';

function MainContent({ Width }) {
    return (
        <Container style={{ width: `calc( 100% - ${Width} )` }}>
            This PC Main Content
        </Container>
    )
}

export default MainContent;

const Container = styled.div`
    height:100%;
    background: blue;
`