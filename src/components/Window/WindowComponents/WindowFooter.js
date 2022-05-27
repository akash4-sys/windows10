import React from 'react';
import styled from 'styled-components';

function WindowFooter() {
    return (
        <Container>
            <div>10 items</div>
            <ViewChange>
                <div><img src="Images/listview.ico" alt="" /></div>
                <div><img src="Images/imageview.ico" alt="" /></div>
            </ViewChange>
        </Container>
    )
}

export default WindowFooter;

const Container = styled.div`
    height:100%;
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-left:10px;
    margin-right:5px;
    color:darkblue;
`

const ViewChange = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap:2px;

    div{
        display:flex;
        justify-content: center;
        align-items: center;
        height:19px;
        width:19px;
        border:1px solid transparent;
        &:hover{
            background:var(--folderSelect);
            border:1px solid var(--windowsSelect);
        }
    }

    img{
        height:16px;
        width:16px;
    }
`