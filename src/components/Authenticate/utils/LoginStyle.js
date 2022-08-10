import styled from 'styled-components';

export const InputTag = styled.input`
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

export const Container = styled.div`
    height:100%;
    width:100%;
    color:white;
    box-sizing: border-box;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1{
        font-size: 2.8rem;
        font-weight: 200;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    p{margin:0px;}
    p[data-ptype="center"]{
        text-align: center;
    }
`

export const Footer = styled.div`
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-top: 6rem;
    color:lightblue;
    transition:color 250ms;
    span:hover{ color: #fdfdff };
`

export const Buttons = styled.div`
    display: flex;
    height:75%;
    gap:7px;
    
    button{
        width:7rem; 
        color:white;
        border: none;
        transition:filter 50ms;
    }

    button:nth-child(1){ background:#3179b5; }
    button:nth-child(2){ background:var(--windowsBlue); }

    button:hover{
        cursor:pointer;
        filter:brightness(0.95);
    }

    button:focus-visible{
        outline:none;
    }
`


export const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    input{ 
        width:60%;
        height:2.4rem;
    }
`

export const AvatarCtn = styled.div`
    height: 16rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    box-sizing: border-box;
    padding: 2rem 2rem 0.5rem;

    img{
        height: 10rem;
        width: 10rem;
    }
`

export const Tagbox = styled.div`
    width:60%;
    color:lightblue;
    p{
        margin-bottom:0px;
        margin-top:7px;
        transition:color 250ms;
        font-weight:600;
    }
    span:hover{ color: #fdfdff };
`

export const TagboxOpt = styled.div`
    display:flex;
    justify-content:space-between;
`

export const Alert = styled.div`
    height: 1rem;
    line-height: 2rem;
    color: yellow;
    width: 100%;
    text-align: center;
`