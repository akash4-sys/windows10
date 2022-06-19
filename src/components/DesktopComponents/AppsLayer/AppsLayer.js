import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import OutsideClickAlert from './utils/OutsideClickHandler';
import SelectionLayer from './SelectionLayer';
import { setWindowSnapshots } from '../../../Features/TaskbarSlice/TaskbarSlice';
import { setAppWindow } from '../../../Features/AppWindowSlice/AppWindowSlice';
import { showCxtMenu } from '../../../Features/CxtMenuSlice/CxtMenuSlice';

function AppsLayer() {

    const dispatch = useDispatch();
    const Grid = useSelector((state) => state.appwindow)

    const [gridMap, setGridMap] = useState([0, 0]);
    const [updateGridMap, setUpdateGridMap] = useState([0, 0]);
    const dragItem = useRef();
    const dragTargetIndex = useRef(null);
    const inputRef = useRef();

    const [selectConfig, setSelectConfig] = useState({ show: false, anchorPoint: { x: 0, y: 0 } });

    const appRef = useRef(null);
    OutsideClickAlert(appRef, inputRef);

    useEffect(() => {
        setGridMap(updateGridMap);
    }, [updateGridMap]);

    useEffect(() => {
        const gridComputedStyle = window.getComputedStyle(document.getElementById("grid"));
        let rows = gridComputedStyle.getPropertyValue("grid-template-rows").split(" ").length;
        let columns = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;
        let arr = new Array(rows * columns).fill([0, 0]);
        Object.keys(Grid).map((key, i) => arr[i] = [Grid[key].name, Grid[key].image])
        setGridMap(arr);
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

    const normalAppDisplay = () => {
        appRef.current.style.backgroundColor = "";
        appRef.current.style.border = "";
    }

    const changeInputDisplay = (inputRef) => {
        normalAppDisplay();
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

    const handleAppDoubleClick = (e) => {
        changeDisplay(e);
        if (e.target === inputRef.current) {
            setTimeout(() => { changeInputDisplay(inputRef); }, 100);
        }
        else {
            const name = inputRef.current.name;
            dispatch(setAppWindow({ windowName: name, windowCount: 1 }));
            setTimeout(() => { normalAppDisplay() }, 10);
            dispatch(setWindowSnapshots(name));
        }
    }

    function rightClickHandler(e) {
        changeDisplay(e);
        dispatch(showCxtMenu({ show: true, cxtMenu: "desktopAppsMenu", type: "window", windowName: inputRef.current.name, anchor: { x: e.pageX, y: e.pageY } }));
    }

    function rightClickOnEmptyBox(e, name, appImg) {
        if (!name && !appImg)
            dispatch(showCxtMenu({ show: true, cxtMenu: "defaultMenu", type: "window", anchor: { x: e.pageX, y: e.pageY } }));
    }

    function handleMouseDown(e, name, appImg) {
        dispatch(showCxtMenu({ show: false, cxtMenu: [], type:"", windowName:"", anchor:{x:0, y:0} }));
        if (!name && !appImg && e.buttons === 1) setSelectConfig({ show: true, anchorPoint: { x: e.pageX, y: e.pageY } });
    }

    return (
        <Container id="grid">
            {
                gridMap.map((box, boxIndex) => (
                    <App key={boxIndex}
                        onDragEnter={(e) => { handleDragEnter(e, boxIndex) }}
                        onContextMenu={(e) => rightClickOnEmptyBox(e, box[0], box[1])}
                        onMouseDown={(e) => handleMouseDown(e, box[0], box[1])}
                    >
                        {(box[0] && box[1]) ?

                            <Draggable draggable
                                className="appHover"
                                key={boxIndex + 1000}
                                onDragStart={(e) => handleDragStart(e, boxIndex)}
                                onDragEnd={handleDragEnd}
                                onClick={(e) => changeDisplay(e)}
                                onDoubleClick={handleAppDoubleClick}
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
            {selectConfig.show && <SelectionLayer selectConfig={selectConfig} setSelectConfig={setSelectConfig} />}
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