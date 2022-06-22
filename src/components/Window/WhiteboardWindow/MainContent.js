/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    Container, SettingsBar, Button, User, Content, WhiteboardList, NewBoard, AddNew, New, WhiteBoard, Pens, RenameCtn, RenameBox, BoxTitle
} from './utils/MainContentStyle';
import { setWhiteboardPointer } from '../../../Features/UtilitySlice';
import Board from './utils/Board';
import Pointer from './utils/Pointer';
import AdditionalSettings from './utils/AdditionalSettings';
import RenameDialogBox from './utils/RenameDialogBox';
import { ReactComponent as Close } from '../../../close.svg';

function MainContent() {

    const dispatch = useDispatch();
    const [newBoard, setNewBoard] = useState(false);
    const [boardArr, setBoardArr] = useState([]);
    const [renameBox, setRenameBox] = useState({ show: false, index: null });
    const CanvasTitleRef = useRef("Untitled");
    const CanvasRef = useRef();
    const whiteBoardRef = useRef();
    let canvas, ctx, fillStyle = "", drawing = false;

    useEffect(() => {
        if (newBoard) {
            canvas = CanvasRef.current;
            ctx = canvas.getContext('2d');
            let whiteBoard = whiteBoardRef.current;
            canvas.width = whiteBoard.getBoundingClientRect().width;
            canvas.height = whiteBoard.getBoundingClientRect().height;

            canvas.addEventListener('mousemove', drawOnCanvas);
            return () => {
                canvas.removeEventListener('mousemove', drawOnCanvas);
                fillStyle = "";
                drawing = false;
                dispatch(setWhiteboardPointer({ x: 0, y: 0, color: "" }));
                const userDrawnImg = canvas.toDataURL('image/png', 1);
                setBoardArr([...boardArr, [userDrawnImg, CanvasTitleRef.current]]);
            }
        }
    }, [newBoard]);

    function drawOnCanvas(e) {
        if (!fillStyle) return;
        let rect = canvas.getBoundingClientRect();
        dispatch(setWhiteboardPointer({ x: e.pageX - rect.left, y: e.pageY - rect.top, color: fillStyle }));
        if (!drawing) return;
        draw(e);
    }

    function draw(e) {
        let rect = canvas.getBoundingClientRect();
        ctx.beginPath();
        ctx.arc(e.pageX - rect.left, e.pageY - rect.top, 6, 0, 2 * Math.PI);
        ctx.fillStyle = fillStyle;
        ctx.fill();
    }

    function handleMouseDownCanvas(e) {
        e.stopPropagation();
        if (fillStyle) draw(e);
        drawing = true;
    }

    function handleMouseUpCanvas(e) {
        e.stopPropagation();
        drawing = false;
    }

    function selectPen(color) {
        canvas.style.cursor = "none";
        fillStyle = color;
    }

    return (
        <Container>
            <SettingsBar style={newBoard ? { justifyContent: "space-between" } : { justifyContent: "flex-end" }}>

                {newBoard && <AdditionalSettings setNewBoard={setNewBoard} ref={CanvasTitleRef} />}

                {!newBoard && <User>Am</User>}
                <Button onMouseEnter={(e) => e.currentTarget.children[0].src = "Images/settingsFill.png"}
                    onMouseLeave={(e) => e.currentTarget.children[0].src = "Images/settingsb.png"}>
                    <img src="Images/settingsb.png" alt="set" />
                </Button>

            </SettingsBar>
            {
                newBoard ?
                    <WhiteBoard ref={whiteBoardRef}>
                        <canvas ref={CanvasRef} onMouseDown={handleMouseDownCanvas} onMouseUp={handleMouseUpCanvas}></canvas>
                        <Pointer />
                        <Pens>
                            <Button onClick={() => selectPen("black")}><i className="fas fa-pen"></i></Button>
                            <Button onClick={() => selectPen("red")}><i style={{ color: "red" }} className="fas fa-pen"></i></Button>
                            <Button onClick={() => selectPen("blue")}><i style={{ color: "blue" }} className="fas fa-pen"></i></Button>
                            <Button onClick={() => selectPen("yellow")}><i style={{ color: "yellow" }} className="fas fa-highlighter"></i></Button>
                            <Button onClick={() => selectPen("white")}><i style={{ color: "pink" }} className="fas fa-eraser"></i></Button>
                            <Button><Close fill="black" style={{ height: "20px", width: "20px" }} /></Button>
                        </Pens>
                    </WhiteBoard>
                    :
                    <Content>
                        <WhiteboardList>
                            <NewBoard onClick={() => setNewBoard(true)}>
                                <AddNew>+</AddNew>
                                <New>New Whiteboard</New>
                            </NewBoard>
                            {
                                boardArr.map((item, i) => (
                                    <Board userCanvas={item[0]} key={i} index={i} canvasTitle={item[1]} setRenameBox={setRenameBox} />
                                ))
                            }
                        </WhiteboardList>
                    </Content>
            }
            {
                renameBox.show &&
                <RenameCtn>
                    <RenameBox>
                        <BoxTitle>Rename whiteboard</BoxTitle>
                        <RenameDialogBox setRenameBox={setRenameBox} setBoardArr={setBoardArr} index={renameBox.index} boardArr={boardArr}
                            currName={boardArr[renameBox.index][1]} />
                    </RenameBox>
                </RenameCtn>
            }

        </Container>
    )
}

export default MainContent;