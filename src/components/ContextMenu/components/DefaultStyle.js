import styled, { keyframes } from 'styled-components';

const appear = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`

export const Menu = styled.ul`
    list-style: none;
    position: absolute;
    background-color: var(--clickMenu);
    box-shadow: 0 10px 20px rgb(64 64 64 / 5%);
    padding: 5px 0px;
    margin: 0px;
    width: 17rem;
    border:1px solid var(--startbg);
    font-size: calc(var(--windowsFontSize) + 1px);
    opacity:1;
    animation: ${appear} 100ms linear;
    z-index:9999;

    hr{
        margin: 4px 10px;
    }

    .disable{
        color:var(--startbg);
    }
`

export const Options = styled.li`
    border: none;
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    transition: 0.1s linear;
    height: 1.5rem;
    padding: 0px 10px;
    justify-content: space-between;

    &:not(.disable):hover{
        background-color: white;
    }
`

export const LeftSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img{
        height:20px;
        width:20px;
    }
`

export const RightSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        height:16px;
        width:16px;
    }
`

export const Empty = styled.div`
    height:16px;
    width:16px;
`