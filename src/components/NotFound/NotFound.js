import React from 'react';
import styled from 'styled-components';

function NotFound() {
    return (
        <Container>
            <div>NotFound</div>
        </Container>
    )
}

export default NotFound;

const Container = styled.div`   
    font-size:5rem;
    font-weight:800;
    color:var(--windowsBlue);
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:black;
`