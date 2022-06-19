import React, { forwardRef } from 'react';
import styled from 'styled-components';

const MainContent = forwardRef(({ Width, SRC }, WindowRef) => {
    return (
        <Container 
            ref={WindowRef}
            style={{ width: `calc( 100% - ${Width} )` }}
        >
            <iframe src={SRC} frameBorder="0" title="content"></iframe>
        </Container>
    )
});

export default MainContent;

const Container = styled.div`
    height:100%;
    overflow:hidden;
    iframe{
        height: 100%;
        width: 100%;
    }
    background:url(Images/loading.gif) no-repeat center;
`