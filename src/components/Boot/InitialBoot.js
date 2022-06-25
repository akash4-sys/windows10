import React from 'react';
import styled from 'styled-components';

function InitialBoot() {
    return (
        <BootLoader className="fa-brands fa-windows" />
    )
}

export default InitialBoot;

const BootLoader = styled.div`
    background:black;
    height:100vh;
    width:100vw;
    z-index:10001;
    position:absolute;
    text-align:center;
    font-size:10rem;
    color:var(--windowsBlue);
    line-height:70vh !important;
`