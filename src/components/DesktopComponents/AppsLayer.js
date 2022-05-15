import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Grid1 } from '../Data/StartMenuApps';

function AppsLayer() {

    const [gridMap, setGridMap] = useState([0, 0]);
    const [updateGridMap, setUpdateGridMap] = useState([0, 0]);
    const dragItem = useRef();
    const dragTargetIndex = useRef(null);

    useEffect(() => {
        setGridMap(updateGridMap);
    }, [updateGridMap])

    useEffect(() => {
        const gridComputedStyle = window.getComputedStyle(document.getElementById("grid"));
        let rows = gridComputedStyle.getPropertyValue("grid-template-rows").split(" ").length;
        let columns = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;
        let arr = new Array(rows * columns).fill([0, 0]);
        Grid1.map((a, i) => (
            arr[i] = a
        ))
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
        }else{  
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

    return (
        <Container id="grid">
            {
                gridMap.map((box, boxIndex) => (
                    <App key={boxIndex}
                        onDragEnter={(e) => { handleDragEnter(e, boxIndex) }}
                    >
                        {(box[0] && box[1]) ?

                            <Draggable draggable
                                key={boxIndex + 1000}
                                onDragStart={(e) => handleDragStart(e, boxIndex)}
                                onDragEnd={handleDragEnd}
                                className="appHover"
                            >

                                <img src={box[1]} alt={box[0]} draggable="false" />
                                <div>{box[0]}</div>
                            </Draggable>
                            : null
                        }
                    </App>
                ))
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
    font-size:12.5px;

    .dragging {
        background-color: var(--windowsSelect) !important;
    }

    .appHover:hover{
        background-color:var(--windowsHover);
        border: 0.1px solid #ffffff57;
    }
    
    .appHover:active{
        background-color:var(--windowsClick);
    }
`

const App = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    color:white;
`

const Draggable = styled(App)`
    height: 60%;
    width: 70%;
`