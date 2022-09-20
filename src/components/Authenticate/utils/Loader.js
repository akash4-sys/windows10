import React from 'react';
import styled from 'styled-components';

function Loader() {
    return (
        <Container>
            <img src="Images/loginLoader.svg" alt="authentication_loader_img" />
        </Container>
    )
}

export default Loader;

const Container = styled.div`
    display:flex;
    height:100%;
    width:100%;
    justify-content:center;
    align-items:center;
`