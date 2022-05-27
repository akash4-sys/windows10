import React,{ forwardRef, useEffect, useRef } from 'react';
import styled from 'styled-components';

const MyPortfolioNameBar = forwardRef((props, WindowRef) => {

    let portfolioRef = useRef();

    useEffect(() => {
        portfolioRef.current = WindowRef.current; 
    },[])
    
    function fullScreen(){
        portfolioRef.current.requestFullscreen();
    }

    return (
        <Container>
            <img src="Images/myportfolio.gif" alt="akash"/>
            <div>My Portfolio</div>
            <Expand onClick={fullScreen}>
                <i className="fas fa-expand"></i>
            </Expand>
        </Container>
    )
})

export default MyPortfolioNameBar;

const Container = styled.div`
    height:100%;
    margin-left:10px;
    display:flex;
    align-items:center;
    gap:7px;

    img{
        height:40px;
        width:40px;
        border-radius: 50%;
    }
    
    div{
        width:max-content;
        font-size:15px;
        font-weight: bolder;
    }
`

const Expand = styled.span`
    height:20px;
    width:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    border:1px solid transparent;
    transition:all 150ms;

    &:hover{
        cursor:pointer;
        background-color: var(--windowsHover);
        border:1px solid var(--windowsSelect);
    }
`