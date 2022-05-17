import React, { useEffect } from 'react';
import styled from 'styled-components';

function SelectionLayer({ show, anchorPoint, Size, setSize }) {
    
    useEffect(() => {
        document.addEventListener('mousemove', update);
        return () => {
            document.removeEventListener('mousemove', update)
        }
    }, [anchorPoint]);

    function update(e) {
        let height = Math.abs(anchorPoint.y - e.pageY);
        let width = Math.abs(anchorPoint.x - e.pageX);
        setSize({ height, width });
    }
    
    if (show) {
        return (
            <Layer id="layer" style={{ 
                top: anchorPoint.y, 
                left: anchorPoint.x,
                height: Size.height + "px", 
                width: Size.width + "px"
            }} />
        )
    }
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