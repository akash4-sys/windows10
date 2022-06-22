import React, { useState, useRef, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import { Button, ButtonCtn } from './MainContentStyle';

const AdditionalSettings = forwardRef(({ setNewBoard }, CanvasTitleRef) => {

    const [renameBox, setRenameBox] = useState({show: false, title:"Untitled Whiteboard"});
    const [newTitle, setNewTitle] = useState("Untitled Whiteboard");
    const renameBoxRef = useRef();
    const renameBtnRef = useRef();
    const titleRef = useRef();

    useEffect(() => {
        if (!renameBox.show) return;
        function handleClickOutside(event) {
            if (!renameBoxRef?.current?.contains(event.target) && !renameBtnRef?.current?.contains(event.target)){
                if(titleRef.current) setRenameBox({show:false, title:titleRef.current});
                else setRenameBox({show:false, title:"Untitled"});
            }
            
        }
        document.addEventListener("click", handleClickOutside);
        return () => { document.removeEventListener("click", handleClickOutside); };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [renameBox.show]);

    function handleInputChange(e){
        titleRef.current = e.target.value;
        setNewTitle(e.target.value);
    }

    function clickedHome(){
        setNewBoard(false); 
        CanvasTitleRef.current = renameBox.title;
    }
    
    return (
        <ButtonCtn>
            <Button onMouseEnter={(e) => e.currentTarget.children[0].src = "Images/homeFill.png"}
                onMouseLeave={(e) => e.currentTarget.children[0].src = "Images/home.png"}
                onClick={clickedHome}>
                <img src="Images/home.png" alt="set" />
            </Button>
            <hr />
            <Button><img src="Images/undo.png" alt="set" style={{ height: "13px", width: "13px" }} /></Button>
            <Button><img src="Images/undo.png" alt="set" style={{ transform: "scaleX(-1)", height: "13px", width: "13px" }} /></Button>
            <hr />
            <Button
                style={{
                    width: "fit-content", gap: "5px", paddingLeft: "5px", paddingRight: "5px", fontWeight: "bold", fontSize: "13px",
                    position: "relative"
                }}
                onClick={() => renameBox.show ? setRenameBox({ ...renameBox, show:false }) : setRenameBox({ ...renameBox, show:true })}
                ref={renameBtnRef}
            > 
                {renameBox.title}
                <img src="Images/downarrow.png" alt="set" style={{ height: "13px", width: "13px" }} />
            </Button>
            {
                renameBox.show &&
                <RenameBox ref={renameBoxRef}>
                    <RenameTitle>Board Name</RenameTitle>
                    <Input>
                        <input type="text" name="newWhiteboard" placeholder="Untitled"
                            autoComplete="off" maxLength="35" onChange={handleInputChange} value={newTitle}/>
                        <img src="Images/edit.png" alt="" />
                    </Input>
                </RenameBox>
            }
        </ButtonCtn>
    )
})

export default AdditionalSettings;

const RenameBox = styled.div`
    position:absolute;
    height:4rem;
    width:22rem;
    background:white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    top:2.1rem;
    left:8.1rem;
    z-index:3;
    padding:0.5rem;
    border-radius:3px;
    &:hover{ cursor:default; }
`

const RenameTitle = styled.div`
    height: 2rem;
    line-height: 2rem;
    font-weight: 500;
`

const Input = styled.div`
    position: relative;
    img{
        position: absolute;
        right: 5px;
        top: 5px;
        height: 20px;
        width: 20px;
    }
    input{
        width: 21.5rem;
        height: 1.5rem;
        &:focus-within{
            outline-color:var(--windowsBlue);
        }
    }
`