import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Pointer = () => {
    const whiteboardPointer = useSelector((state) => state.utility.whiteboardPointer);
    if(whiteboardPointer.x && whiteboardPointer.y){
        return (
            <PointerComp style={{ top:whiteboardPointer.y , left:whiteboardPointer.x }}>
                <div style={{background:whiteboardPointer.color}}></div>
            </PointerComp>
        )
    }
}

export default Pointer;

const PointerComp = styled.div`
    height:8px;
    width:8px;
    border-radius:50%;
    background:white;
    border:0.1px solid;
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:none;
    
    div{
        border-radius:50%;
        height:6px;
        width:6px;
    }
`