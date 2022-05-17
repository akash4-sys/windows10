import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Grid } from '../Data/DesktopApps';
import OutsideClickAlert from './utils/OutsideClickHandler';
import RightClickMenu from './utils/RightClickMenu';
import { appClickHelper, directOpener } from './utils/AppClickHelper';
import { defaultMenu } from '../Data/RightClickMenuData';

function AppsLayer() {

    const [gridMap, setGridMap] = useState([0, 0]);
    const [updateGridMap, setUpdateGridMap] = useState([0, 0]);
    const dragItem = useRef();
    const dragTargetIndex = useRef(null);
    const inputRef = useRef();
    const clickCount = useRef(0);

    const [ Wrapper, setWrapper ] = useState(null);
    const [ cntMenu, setCntMenu ] = useState(defaultMenu);

    const appRef = useRef(null);
    OutsideClickAlert(appRef, inputRef, clickCount, setWrapper, setCntMenu, defaultMenu);

    useEffect(() => {
        setGridMap(updateGridMap);
    }, [updateGridMap]);

    useEffect(() => {
        const gridComputedStyle = window.getComputedStyle(document.getElementById("grid"));
        let rows = gridComputedStyle.getPropertyValue("grid-template-rows").split(" ").length;
        let columns = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;
        let arr = new Array(rows * columns).fill([0, 0]);
        Grid.map((a, i) => (
            arr[i] = a
        ))
        setGridMap(arr);
        setWrapper(document.getElementById('grid'));
    }, []);

    const handleDragStart = (e, boxIndex) => {
        e.target.classList.add('dragging')
        dragItem.current = boxIndex;
        setTimeout(() => { e.target.classList.remove('dragging') }, 0)
    }

    const handleDragEnter = (e, targetIndex) => {
        if (targetIndex !== dragItem.current && !gridMap[targetIndex][0]) {
            dragTargetIndex.current = targetIndex;
        } else {
            dragTargetIndex.current = null;
        }
    }

    const handleDragEnd = (e) => {

        if (dragTargetIndex.current != null) {
            let newMap = [...gridMap];
            let currItem = gridMap[dragItem.current]
            newMap[dragTargetIndex.current] = currItem;
            newMap[dragItem.current] = [0, 0];
            setUpdateGridMap(newMap);
        }
        dragItem.current = null;
    }

    const changeInputDisplay = (appRef, inputRef) => {
        appRef.current.style.backgroundColor = "";
        appRef.current.style.border = "";
        inputRef.current.readOnly = false;
        inputRef.current.focus();
        inputRef.current.select();
        inputRef.current.style.backgroundColor = "white";
        inputRef.current.style.color = "black";
    } 
    
    const renameApp = (e, boxIndex) => {
        let newMap = [...gridMap];
        gridMap[boxIndex][0] = e.target.value;
        if (e.target.value) {
            setUpdateGridMap(newMap);
        }
    }

    const handleKey = (e, boxIndex) => {
        if (e.key === 'Enter') { 
            e.target.blur();  
            renameApp(e, boxIndex);
            inputRef.current.readOnly = true;
            inputRef.current.blur();
            inputRef.current.style.backgroundColor = "transparent";
            inputRef.current.style.color = "";
        }
    }

    function changeDisplay(e) {
        e.currentTarget.style.backgroundColor = "var(--windowsClick)";
        e.currentTarget.style.border = "0.1px solid #ffffff57";
        appRef.current = e.currentTarget;
        inputRef.current = e.currentTarget.querySelector('input');
    }
    
    const handleAppClick = (e) => {
        changeDisplay(e);
        setTimeout(() => {
            clickCount.current += 1;
            if (clickCount.current === 2 && e.target === inputRef.current) {
                setTimeout(() => {  changeInputDisplay(appRef, inputRef);   }, 100);
                clickCount.current = 0;

            }else if (clickCount.current === 2){
                directOpener(inputRef.current.name);
                clickCount.current = 0;
            }
        }, 500)

        setTimeout(() => { 
            clickCount.current = 0;
        }, 1200)

    }

    function rightClickHandler(e) {
        changeDisplay(e);
        appClickHelper(setWrapper, setCntMenu, appRef.current, inputRef.current.name);
    }

    return (
        <Container id="grid">
            {
                gridMap.map((box, boxIndex) => (
                    <App key={boxIndex}
                        onDragEnter={(e) => { handleDragEnter(e, boxIndex) }}
                    >
                        {(box[0] && box[1]) ?

                            <Draggable draggable
                                className="appHover"
                                key={boxIndex + 1000}
                                onDragStart={(e) => handleDragStart(e, boxIndex)}
                                onDragEnd={handleDragEnd}
                                onClick={handleAppClick}
                                onContextMenu={rightClickHandler}
                            >
                                <img src={box[1]} alt={box[0]} draggable="false" />
                                <input type="text" value={box[0]} readOnly maxLength="15" 
                                    onChange={(e) => renameApp(e, boxIndex)}
                                    onKeyPress={(e) => handleKey(e, boxIndex)}
                                    size={box[0].length} 
                                    name={box[0]}
                                />
                            </Draggable>
                            : null
                        }
                    </App>
                ))
            }
            {
                (Wrapper) ? <RightClickMenu Wrapper={Wrapper} CntMenu={cntMenu} setCntMenu={setCntMenu}/> : null
            }
        </Container>
    )
}

export default AppsLayer;

const Container = styled.div`
    height: calc(100% - 2.5rem);
    width: 100%;
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
    grid-auto-flow: column;
    font-size:var(--windowsFontSize);

    .dragging {
        background-color: var(--windowsSelect) !important;
    }

    .appHover:hover{
        background-color:var(--windowsHover);
        border: 0.1px solid #ffffff57;
    }
`

const App = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    color:white;

    img{
        height:42px;
		width:42px;
    }
`

const Draggable = styled(App)`
    height: 60%;
    width: 70%;

    input{
        max-width: 110%;
        border-radius: 0px;
        padding: 0px;
        border: none;
        margin: 0px;
        height: max-content;
        background-color: transparent;
        color: white;
        text-align: center;
        display:flex;
    }

    input:hover{
        cursor:default;
    }

    input:focus-visible{
		outline: none;
	}
`