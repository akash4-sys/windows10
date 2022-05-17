function handleMouseDown(e, setShowSelect, setAnchorPoint, setSize) {
    if (e.buttons === 4) {
        setShowSelect(true);
        setAnchorPoint({ x: e.pageX, y: e.pageY });
        e.cursor = 'default';
    }
}

function handleMouseUp(e, setShowSelect, setAnchorPoint, setSize) {
    setShowSelect(false);
    setSize({ height: 0, width: 0 });
    e.cursor = 'default';
}

export { handleMouseDown, handleMouseUp };