import React, { useRef } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { AccessList } from '../../Data/QuickAccessList';

function QuickAccessBar({ Width }) {

    const ItemRef = useRef();
    const ListRef = useRef();

    function clickOutsideQuickAccess(e) {
        if(!ListRef.current.contains(e.target)){
            ItemRef.current.style.backgroundColor = "var(--linecolor)";
            window.removeEventListener('click', clickOutsideQuickAccess);
        }
    }

    function handleClick(e) {
        if( ItemRef.current && ItemRef.current !== e.currentTarget ){
            ItemRef.current.style.backgroundColor = "transparent";
        }
        ItemRef.current = e.currentTarget;
        e.currentTarget.style.backgroundColor = "var(--folderClick)";

        window.addEventListener('click', clickOutsideQuickAccess);
    }

    return (
        <Container style={{ width: Width }}>
            <List ref={ListRef}>
                {
                    AccessList.map((app, i) => (

                        <Item key={nanoid()}
                            style={ app[0] ? { paddingLeft: "10px" } : { paddingLeft : "17px"} }
                            onClick={handleClick} 
                        >
                            <LeftSection>
                                <Arrow className="quickaccessarrow"> { app[1] && <i className={`fa-solid fa-chevron-${app[1]}`} ></i>} </Arrow>
                                <img src={app[2]} alt="" />
                                <div>{app[3]}</div>
                            </LeftSection>
                            <RightSection>
                                { app[4] && <img src={app[4]} alt="a" /> }
                            </RightSection>
                        </Item>

                    ))
                }
            </List>
        </Container>
    )
}

export default QuickAccessBar;

const Container = styled.div`
    height:100%;
    overflow-y:visible;
    overflow-x:hidden;
`

const List = styled.ul`
    list-style: none;
    padding:0px;
    margin: 1rem 0 0;

    &:hover{
        .quickaccessarrow{ opacity:1; }
    }
`

const Item = styled.li`
    display:flex;
    align-items: center;
    justify-content:space-between;
    height:1.5rem;

    img{
        height: 16px;
        width: 16px;
    }

    &:hover{ background: var(--folderSelect); }
`

const LeftSection = styled.div`
    display:flex;
    align-items: center;
    gap:5px;
`

const Arrow = styled.div`
    height:100%;
    width:10px;
    font-size: 11px;
    padding: 0px 0px 3px;
    opacity:0;
    transition: all 800ms;

    .fa-chevron-right{ color:var(--primary-color); }
`

const RightSection = styled.div`
    display:flex;
    align-items: center;
`