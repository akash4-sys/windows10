import React, { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Grid } from '../../Data/DesktopApps';
import OutsideClickAlert from './utils/OutsideClickHandler';
import RightClickMenu from './utils/RightClickMenu';
import { appClickHelper } from './utils/AppClickHelper';
import { defaultMenu } from '../../Data/RightClickMenuData';
import SelectionLayer from './SelectionLayer';
import { handleMouseDown, handleMouseUp } from './utils/SelectionLayerHelper';
import { AppWindowContext } from '../../ContextApi/Context';
import Apps from '../../Data/AppData';
import { TaskbarContext } from '../../ContextApi/Context';

function AppsLayer() {

    const [gridMap, setGridMap] = useState([0, 0]);
    const [updateGridMap, setUpdateGridMap] = useState([0, 0]);
    const dragItem = useRef();
    const dragTargetIndex = useRef(null);
    const inputRef = useRef();

    // cxt menu
    const [Wrapper, setWrapper] = useState(null);
    const [cntMenu, setCntMenu] = useState(defaultMenu);

    //select layer
    const [showSelect, setShowSelect] = useState(false);
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
    const [Size, setSize] = useState({ height: 0, width: 0 });

    const appRef = useRef(null);
    OutsideClickAlert(appRef, inputRef, setWrapper);

    const [AppWindow, setAppWindow] = useContext(AppWindowContext);
    const [TaskbarApps, setTaskBarApps] = useContext(TaskbarContext);

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

    const TaskbarHelper = (e, name) => {
        let existsInTaskbar = TaskbarApps.filter(app => app[0] === name);
        let copyTaskBar = TaskbarApps;
        if(existsInTaskbar.length !== 0){
            copyTaskBar.forEach(app => {
                app[4] = false;
                if(app[0] === name){ 
                    app[2] = true;
                    app[4] = true;
                    return;
                }
            })
            setTaskBarApps(TaskbarApps => [...TaskbarApps], copyTaskBar);
            return;
        }

        let appImage;
        Apps.forEach(app => { if(app[1] === name){ appImage = app[0] } })
        copyTaskBar.push([ name, appImage, true, false, true ]);
        setTaskBarApps(TaskbarApps => [...TaskbarApps], [name, appImage, true, false]);
    }

    const handleAppDoubleClick = (e) => {
        changeDisplay(e);
        if (e.target === inputRef.current) {
            setTimeout(() => { changeInputDisplay(inputRef); }, 100);
        }
        else {
            const name = inputRef.current.name;
            setAppWindow({ ...AppWindow, [name]: { show: true, count: AppWindow[name].count + 1 } });
            setTimeout(() => { normalAppDisplay() }, 10);
            TaskbarHelper(e, name);
        }
    }

    function rightClickHandler(e) {
        changeDisplay(e);
        appClickHelper(setWrapper, setCntMenu, appRef.current, inputRef.current.name);
    }

    return (
        <Container id="grid"
            onMouseDown={(e) => handleMouseDown(e, setShowSelect, setAnchorPoint)}
            onMouseUp={(e) => handleMouseUp(e, setShowSelect, setSize)}
        >
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
            {
                (Wrapper) ? <RightClickMenu Wrapper={Wrapper} CntMenu={cntMenu} setCntMenu={setCntMenu} /> : null
            }
            <SelectionLayer show={showSelect} anchorPoint={anchorPoint} Size={Size} setSize={setSize} />
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