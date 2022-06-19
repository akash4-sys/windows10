import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

function SelectionLayer({ selectConfig, setSelectConfig }) {

    const layerRef = useRef();
    let anchorPoint = selectConfig.anchorPoint;

    useEffect(() => {
        document.addEventListener('mousemove', update);
        document.addEventListener('mouseup', handleSelectionLayerMouseUp);

        return () => {
            document.removeEventListener('mousemove', update)
            document.removeEventListener('mouseup', handleSelectionLayerMouseUp);
        }
    }, []);

    function update(e) {
        let height = Math.abs(anchorPoint.y - e.pageY);
        let width = Math.abs(anchorPoint.x - e.pageX);
        if (e.pageX < anchorPoint.x) layerRef.current.style.left = e.pageX + "px";
        if (e.pageY < anchorPoint.y) layerRef.current.style.top = e.pageY + "px";
        layerRef.current.style.height = height + "px";
        layerRef.current.style.width = width + "px";
    }

    function handleSelectionLayerMouseUp(e) {
        setSelectConfig({ show: false, anchorPoint: { x: 0, y: 0 } });
    }

    return <Layer style={{ top: anchorPoint.y, left: anchorPoint.x }} ref={layerRef} />
}
export default SelectionLayer;

const Layer = styled.div`
    position: absolute;
    background-color: var(--windowsBlue);
    border:1px solid var(--windowsSelect);
    opacity:40%;
    overflow: auto;
    cursor:default;
`