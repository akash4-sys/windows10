import React, { useState, useRef, forwardRef, useEffect } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

const Namebar = forwardRef(({ windowsName, windowIcon }, refsArray) => {

    const { nameBarRefs, mainContentRefs } = refsArray.current;
    const [showFileList, setShowFileList] = useState(false);

    const FileMenuRef = useRef();
    const ContainerRef = useRef();

    useEffect(() => {
        nameBarRefs.current.push(ContainerRef.current);
    }, [])

    function saveData() {
        let index;
        for(var i = 0; i < nameBarRefs.current.length; i++){
            if(nameBarRefs.current[i] === ContainerRef.current){
                index = i;
            }
        }
        let data = mainContentRefs.current[index].value;
    }

    let FileName = "Untitled";
    let FileList = [
        ["New", "Ctrl+N"],
        ["New Window", "Ctrl+Shift+N"],
        ["Open...", "Ctrl+O"],
        ["Save", "Ctrl+S", saveData],
        ["Save as", "Ctrl+Shift+S"],
        ["Page Setup....", ""],
        ["Print...", "Ctrl+P"],
        ["Exit", ""],
    ];

    function handleClickOutside(e) {
        if (FileMenuRef.current && !FileMenuRef.current.contains(e.target)) {
            setShowFileList(false);
            window.removeEventListener('click', handleClickOutside);
        }
    }

    function FileClickListener(e) {
        e.stopPropagation()
        if (showFileList) {
            setShowFileList(false);
        } else {
            setShowFileList(true);
            window.addEventListener('click', handleClickOutside);
        }
    }

    return (
        <Container ref={ContainerRef} id={nanoid()}>
            <Title>
                <img src={windowIcon} alt="notepad" />
                <div>{FileName} - {windowsName}</div>
            </Title>
            <OptionsList>
                <Option onClick={FileClickListener}>
                    File
                </Option>
                <Option>Edit</Option>
                <Option>Format</Option>
                <Option>View</Option>
                <Option>Help</Option>
            </OptionsList>
            {
                showFileList &&
                <OptionMenu ref={FileMenuRef}>
                    {
                        FileList.map((opt, i) => (
                            <Li key={nanoid()} onClick={opt[2] ? opt[2] : null}>
                                <div>{opt[0]}</div>
                                <div>{opt[1]}</div>
                            </Li>
                        ))
                    }
                </OptionMenu>
            }
        </Container>
    )
});

export default Namebar;

const Container = styled.div`
    height:100%;
    margin-left:7px;
    margin-top:7px;
    display: flex;
    flex-direction: column;
    gap: 3px;
`

const Title = styled.div`
    display:flex;
    align-items:center;
    width:max-content;
    gap:4px;
    
    img{
        height:16px;
        width:16px;
    }
`

const OptionsList = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:3px;
`

const Option = styled.div`
    padding: 2px;

    &:hover{
        background:var(--folderSelect);
    }
`

const OptionMenu = styled.ul`
    list-style: none;
    position: absolute;
    background-color: var(--clickMenu);
    box-shadow: 0 10px 20px rgb(64 64 64 / 5%);
    padding:0px;
    margin: 0px;
    width: 12rem;
    border:1px solid var(--startbg);
    
    hr{
        margin: 4px 10px;
    }
`

const Li = styled.li`
    border: none;
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    transition: 0.1s linear;
    height: 1.15rem;
    padding: 0px 10px;
    justify-content: space-between;

    &:hover{
        background: var(--windowsSelect);
    }
`