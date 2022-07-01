import styled from 'styled-components';

const InputTag = styled.input`
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

export default InputTag;