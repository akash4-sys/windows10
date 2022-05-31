import React, { useRef, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

const MainContent = forwardRef((props, refsArray) => {

    const { mainContentRefs, autoSave, iterator } = refsArray.current;
    const ContainerRef = useRef();
    let targetValue = "";
    
    useEffect(() => {
        mainContentRefs.current.push(ContainerRef.current);
        autoSave.current.push(targetValue);
        let index = iterator.current;
        ContainerRef.current.value = autoSave.current[index];
        iterator.current = iterator.current + 1;
    }, []);

    function handleChange(e) {
        targetValue = e.target.value;
        let index;
        for(var i = 0; i < mainContentRefs.current.length; i++){
            if(mainContentRefs.current[i] === ContainerRef.current){ index = i; }
        }
        autoSave.current[index] = targetValue;
    }

    return (
        <Container ref={ContainerRef} id={nanoid()} onChange={handleChange} />
    )
})

export default MainContent;

const Container = styled.textarea`
    height: 99.5%;
    overflow-y: visible;
    overflow-x: hidden;
    width: 99.5%;
    padding: 0;
    margin: 0 0 0.5% 0.5%;
    border: none;
    outline: none;
    resize:none;
`