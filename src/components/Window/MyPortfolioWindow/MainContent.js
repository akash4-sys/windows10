import React, { forwardRef } from 'react';
import styled from 'styled-components';

const MainContent = forwardRef(({ Width }, WindowRef) => {
    return (
        <Container 
            ref={WindowRef}
            style={{ width: `calc( 100% - ${Width} )` }}
        >
            <iframe src="https://akash4.netlify.app/" frameBorder="0" title="myportfolio"></iframe>
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
`