import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    overflow:hidden;
    width: 100%;
    padding: 0;
    border: none;
    outline: none;
    resize:none;
`

export const SettingsBar = styled.div`
    height:2.5rem;
    width:100%;    
    position: absolute;
    top: 29px;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    gap:5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

export const Button = styled.div`
    height:2rem;
    width:2rem;
    border-radius:5px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:5px;
    img{
        height:20px;
        width:20px;
    }

    &:hover{
        background:#eeeeee;
        cursor:pointer;
    }
    &:active{ background:#e4e4e4; }
`

export const User = styled(Button)`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    border: 1px solid grey;
    text-align: center;
    margin-right:0px;
    &:hover{ background: white; }
`

export const ButtonCtn = styled.div`
    height:2rem;
    width:fit-content;
    margin-left:5px;
    display:flex;
    align-items:center;
    justify-content:space-evenly;

    hr{ 
        height: 1rem;         
        margin-right: 5px;
    }
`

export const Content = styled.div`
    background:#e6e6e6;
    height:calc(100% - 20px);
    width:100%;
    overflow-y:auto;
    overflow-x:hidden;
    margin-top:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;

    &::-webkit-scrollbar{ width:8px; }
    ::-webkit-scrollbar-track{ margin:3px; }

    &::-webkit-scrollbar-thumb{
        border-radius:5px;
        background-color:var(--hover-color);
    }
`

export const WhiteboardList = styled.div`
    margin-top:3rem;
    height:100%;
    width:80%;
    display:grid;
    grid-template-columns: repeat(auto-fill, 14rem);
    grid-template-rows: repeat(auto-fill, 11rem);
    gap:1.5rem;
`

export const NewBoard = styled.div`
    height:11rem;
    width:14rem;
    background:#0034ff;
    border-radius:10px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    display:flex;
    justify-content:center;
    align-items:center;
    position: relative;
    transition:filter 50ms;

    &:hover{
        filter:brightness(2.3);
        cursor:pointer;
    }
    &:active{ filter:brightness(3); }
`

export const AddNew = styled.div`
    height: 3.5rem;
    width: 3.5rem;
    background:white;
    border-radius:50%;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, 
        rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, 
        rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    text-align:center;
    line-height: 2.8rem;
    font-size: 3rem;
    font-weight: 100;
    color:#0034ff;
`

export const New = styled.div`
    color: white;
    position: absolute;
    top: 70%;
    font-size: initial;
`

export const Board = styled(NewBoard)`
    background:white;
    flex-direction: column;
    &:hover{
        outline:3px solid mediumblue;
        filter:brightness(1);
    }
    &:active{ filter:brightness(1); }
`

export const WhiteBoard = styled.div`
    height:calc(100% - 20px);
    width:100%;
    margin-top:20px;
    position:relative;
`

export const Pens = styled.div`
    height:2.5rem;
    width:14rem;
    position: absolute;
    top:30px;
    padding-left:7px;
    left:calc(50% - 7rem);
    border-radius:10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display:flex;
    align-items:center;
    font-size: 18px;
`

export const RenameCtn = styled.div`
    height: calc(100% - 29px);
    width: 100%;
    position: absolute;
    top:29px;
    background: #0000006e;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RenameBox = styled.div`
    height:7.7rem;
    width:19rem;
    background:white;
    padding:1.5rem;
    border-radius:3px;

    input{
        height: 1.7rem;
        width: 92%;
        margin: 17px 0px;
        padding: 0px 10px;
        font-size:15px;

        &:focus-visible{
            outline-color:var(--windowsBlue);
        }
    }
`

export const BoxTitle = styled.div`
    font-size:1.2rem;
    font-weight:500;
`

export const RenameBtns = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap:7px;
`

export const Cancel = styled.div`
    padding: 6px 20px;
    border: 0.5px solid;
    font-weight: 500;
    font-size: larger;
    border-radius:3px;

    &:hover{ background:#ededed; }
    &:active{ background:#e6e6e6; }
`

export const Rename = styled(Cancel)`
    border: 0px solid;
    background:#eeeeee;
    color:grey;
`