import React, { useState } from 'react';
import styled from 'styled-components';

function Input({ placeholder, type}) {

    const [ inputVal, setInputVal ] = useState();

    function handleChange(e) {
        setInputVal(e.target.value);
    }

    return (
        <InputTag type={type} name={type} placeholder={placeholder} value={inputVal} onChange={handleChange} autoComplete="off"/>
    )
}

export default Input;

const InputTag = styled.input`
    width:18rem;
    height:2rem;
    display:block;
    margin-top: 15px;
    border: 2px inset lightblue;
    box-sizing: border-box;
    padding: 5px 8px;
    font-size:15px;
    transition:background 50ms;

    &:focus-visible{
        outline:none;
    }

    &:not(focus){ 
        background:hsl(205deg 100% 18%);
        ::placeholder{ color:lightblue; }
    }
    &:focus{ 
        background:white;
        ::placeholder{ color:gray; }
    }
`