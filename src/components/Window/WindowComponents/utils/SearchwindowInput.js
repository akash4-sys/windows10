import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Close } from '../../../../svg/close.svg';

function SearchwindowInput({ windowName, Input }) {

    const [ inputConfig, setInputConfig ] = useState({show: false, value:"" });

    function handleChange(e){
        setInputConfig({ show: true, value: e.target.value });
    }

    function closeInput() {
        setInputConfig(false);
    }

    return (
        <>
            <Input type="text" placeholder={`Search ${windowName}`} onChange={handleChange} value={inputConfig.show ? inputConfig.value : ""} />
            {
                inputConfig.show &&
                <>
                    <Cross onClick={closeInput} >
                        <Close fill="black" style={{ height: "13px", width: "13px" }} />
                    </Cross>
                    <Forward className="fa-solid fa-arrow-right-long" />
                </>
            }
        </>
    )
}

export default SearchwindowInput;

const Cross = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    height: 86%;
    width: 1.8rem;
    transition: background-color 500ms;
    &:hover{ background-color: var(--folderSelect); }
`
const Forward = styled.i`
    background-color: var(--windowsBlue);
    color: white !important;
    padding: 9px;
`