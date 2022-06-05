import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { nanoid } from 'nanoid';

function HoverWindow({ showHoverWindow, SnapshotArray, windowImg, windowName }) {

    const ArrayContainerRef = useRef(null);

    useEffect(() => {
        if (!showHoverWindow) return;
        let Obj = getComputedStyle(ArrayContainerRef.current, null);
        let width = parseInt(Obj.getPropertyValue("width"));
        ArrayContainerRef.current.style.left = -((width / 2) - 24) + "px";
    }, [showHoverWindow])

    if (showHoverWindow) {
        return (
            <ArrayContainer ref={ArrayContainerRef}>
                {
                    SnapshotArray.map((item, i) => (
                        <Container key={nanoid()} 
                            onMouseEnter={(e) => e.currentTarget.querySelector("#onlyShowOnHover").style.display = "flex"} 
                            onMouseLeave={(e) => e.currentTarget.querySelector("#onlyShowOnHover").style.display = "none"}>
                            <Header>
                                <Title>
                                    <img src={windowImg} alt="img" />
                                    <div>{item[0]}</div>
                                </Title>
                                <CloseButton id="onlyShowOnHover">
                                    <img src="Images/close.svg" alt="close" />
                                </CloseButton>
                            </Header>
                            <Snapshot>
                                <img src={item[1]} alt="imh" />
                            </Snapshot>
                        </Container>
                    ))
                }
            </ArrayContainer>
        )
    }
}

export default HoverWindow;

const AppearAnimation = keyframes`
    from{
        opacity:0;
        transform:translateY(70px);
    }
    to{
        opacity:1;
        transform:translateY(0px);
    }
`

const ArrayContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    width:fit-content;
    position:absolute;
    bottom:2.5rem;
    height:9.5rem;
`

const Container = styled.div`
    height:9.5rem;
    width:13rem;   
    animation: ${AppearAnimation} 100ms linear 1s forwards;
    opacity:0;
    font-size:var(--windowsFontSize);
    color:white;
    background:var(--startbg);
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
`

const Snapshot = styled.div`
    height:calc(100% - 30px - 0.5rem);
    width:calc(100% - 1rem) !important;
    padding:0 0.5rem;

    img{
        height: 100%;
        width: 100% !important;
    }
`

const Header = styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
    height:30px;
    width:100%;
    background:var(--startbg);
`

const Title = styled.div`
    height:100%;
    width:max-content;
    display:flex;
    justify-content:center;
    align-items: center;
    gap:5px;
    
    img{
        padding-left:10px;
        height:16px;
        width:16px !important;
    }
`

const CloseButton = styled.div`
    height:100%;
    width:32px;
    display:none;
    justify-content:center;
    align-items: center;

    img{
        height:20px;
        width:20px !important;
    }

    &:hover{
        background:red;
    }
`