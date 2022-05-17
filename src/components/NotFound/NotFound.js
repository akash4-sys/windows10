import React, { useEffect } from 'react';
import styled from 'styled-components';

function NotFound() {

    useEffect(() => {
        document.getElementById("taskbar").style.display = "none";
    }, [])

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