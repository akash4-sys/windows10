import React, { useState } from 'react';
import styled from 'styled-components';

function WindowSearchBar({ windowIcon, windowName, Height }) {

    const [ inputConfig, setInputConfig ] = useState({show: false, value:"" });
    const [ addressBarInput, setAddressBarInput ] = useState(windowName);
    let target;

    function outSideClick(e) {
        target.removeAttribute('style');
        e.target.removeEventListener('blur', outSideClick);
        return (e.target.value ? e.target.value : e.target.value = windowName)
    }

    function handleClick(e) {
        target = e.currentTarget;
        target.style.border = "1px solid var(--windowsBlue)";
        target.style.borderBottom = "none";
        let input = target.querySelector('input');
        input.focus();
        input.select();
        input.addEventListener('blur', outSideClick);
    }

    return (
        <Container style={{height:Height}}>
            <ArrowButtons>
                <i className="fa-solid fa-arrow-left-long"></i>
                <i className="fa-solid fa-arrow-right-long"></i>
                <i className="fa-solid fa-chevron-down"></i>
                <i className="fa-solid fa-arrow-up-long"></i>
            </ArrowButtons>
            <AddressBar onClick={handleClick}>
                <Status>
                    <img src={windowIcon} alt="win" />
                    <FileArrow><i className="fa-solid fa-chevron-right"></i></FileArrow>
                    <Input type="text" value={addressBarInput} onChange={(e) => setAddressBarInput(e.currentTarget.value)}/>
                </Status>
                <Buttons>
                    <Button className="WindowSearchBarDownArrow"><i className="fa-solid fa-chevron-down"></i></Button>
                    <Button style={{ transform: "rotate(-90deg)", width: "1.9rem" }}>
                        <i className="fa-solid fa-arrow-rotate-right"></i>
                    </Button>
                </Buttons>
            </AddressBar>
            <SearchBar>
                <SearchIcon><i className="fa-solid fa-magnifying-glass"></i></SearchIcon>
                <Input type="text" placeholder={`Search ${windowName}`} 
                    onChange={(e) => setInputConfig({show: true, value: e.target.value })} value={ inputConfig.show ? inputConfig.value : ""}/>
                {
                    inputConfig.show &&
                    <>
                        <Cross onClick={() => setInputConfig(false)} ><img src="Images/close.png" alt="Close" /></Cross>
                        <Forward className="fa-solid fa-arrow-right-long" />
                    </>
                }
            </SearchBar>
        </Container>
    )
}

export default WindowSearchBar;

const Container = styled.div`
    width: calc(100% - 12px);
    margin: 2px 2px 2px 10px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    i{ color: var(--primary-color); }
`

const ArrowButtons = styled.div`
    width:8rem;
    height:inherit;
    margin-right: 5px;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    align-items: center;
    transition: all 250ms;

    i{
        padding:2px;
        &:hover{
            color:var(--windowsBlue);
        }
    }

    i:nth-child(3){ font-size:10px; }
    i:nth-child(4){ padding: 3px 6px; }
    i:nth-child(4):hover{
        color: var(--primary-color);
        background-color:var(--folderSelect);
    }
`

const AddressBar = styled.div`
    height: calc(100% - 1px);
    width: inherit;
    border: 1px solid var(--linecolor);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Status = styled.div`
    height:100%;
    width:max-content;
    display: flex;
    justify-content:center;
    align-items: center;
    padding:0px 3px;
    transition: all 500ms;

    img{
        height: 16px;
        width: 16px;
    }
`

const FileArrow = styled.div`
    font-size:10px;
    width:1.1rem;
    height:100%;
    display: flex;
    justify-content:center;
    align-items: center;
    transition: all 250ms;
    &:hover{
        background-color: var(--folderSelect);
    }
`

const Buttons = styled.div`
    height:100%;
    width:max-content;
    display: flex;
    justify-content:center;
    font-size: 14px;

    .WindowSearchBarDownArrow{
        border-right: 1px solid var(--linecolor);
        font-size:10px;
    }
`

const Button = styled.div`
    width:1.9rem;
    height:100%;
    display: flex;
    justify-content:center;
    align-items:center;
    transition: background-color 500ms;
    font-size:13px;
    &:hover{
        background-color: var(--folderSelect);
        outline: 1px solid var(--windowsSelect);
    }
`

const SearchBar = styled.div`
    width:15rem;
    border: 1px solid var(--linecolor);
    height:inherit;
    margin-left: 5px;
    display: flex;
    align-items:center;
    font-size:var(--windowsFontSize);
`

const SearchIcon = styled(Button)`
    transform: scale(-1,1);
    &:hover{
        background-color:transparent;
        outline: 0px;
    }
`

const Cross = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    height: 86%;
    width: 1.8rem;
    transition: background-color 500ms;
    &:hover{ background-color: var(--folderSelect); }
    img{
        height: 13px;
        width: 13px;
    }
`
const Forward = styled.i`
    background-color: var(--windowsBlue);
    color: white !important;
    padding: 9px;
`

const Input = styled.input`
    height:93%;
    border:none;
    outline: 0px;
    width:6rem;
    font-size: var(--windowsFontSize);

    &:focus-visible{
        border:none;
        outline: 0px;
    }
`