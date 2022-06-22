import React, { useState, useRef } from 'react';
import styled from 'styled-components';

function RenameDialogBox({ setRenameBox, boardArr, index, setBoardArr, currName }) {

    const [newName, setName] = useState(currName);
    const renameBtnRef = useRef();

    function handleChange(e) {
        setName(e.target.value);
        renameBtnRef.current.style.backgroundColor = "#0034ff";
        renameBtnRef.current.style.color = "white";
    }

    function handleRename(e) {
        let name = newName;
        if(!newName) name = "Untitled";
        boardArr[index][1] = name;
        setBoardArr(boardArr);
        setRenameBox({ show: false, index: null });
    }

    return (
        <>
            <input type="text" maxLength="35" autoComplete="off" placeholder="Untitled whiteboard" onChange={handleChange} value={newName} />
            <RenameBtns>
                <Rename ref={renameBtnRef} onClick={handleRename}>Rename</Rename>
                <Cancel onClick={() => setRenameBox({ show: false, index: null })}>Cancel</Cancel>
            </RenameBtns>
        </>
    )
}

export default RenameDialogBox;

const RenameBtns = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap:7px;
`

const Cancel = styled.div`
    padding: 6px 20px;
    border: 0.5px solid;
    font-weight: 500;
    font-size: larger;
    border-radius:3px;

    &:hover{ 
        background:#ededed;
        cursor:pointer;
    }
    &:active{ background:#e6e6e6; }
`

const Rename = styled(Cancel)`
    border: 0px solid;
    background:#eeeeee;
    color:grey;
`