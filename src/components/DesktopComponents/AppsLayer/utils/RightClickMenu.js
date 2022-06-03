import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { defaultMenu } from '../../../Data/RightClickMenuData';
import { setAppWindow } from '../../../../Features/AppWindowSlice/AppWindowSlice';
import { addAppsInTaskbar } from '../../../../Features/TaskbarSlice/TaskbarSlice';


function RightClickMenu({ Wrapper, CntMenu, setCntMenu }) {

    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    const handleContextMenu = useCallback((e) => {
        e.preventDefault();
        setAnchorPoint({ x: e.pageX, y: e.pageY });
        setShow(false);
        setCntMenu(defaultMenu);
        setTimeout(() => { setShow(true); }, 250);
    }, [setAnchorPoint]);

    const handleClick = useCallback((e) => (
        show ? setShow(false) : null
    ), [show]);

    useEffect(() => {
        document.addEventListener("click", handleClick);
        Wrapper.addEventListener("contextmenu", handleContextMenu);

        return () => {
            document.removeEventListener("click", handleClick);
            Wrapper.removeEventListener("contextmenu", handleContextMenu);
        }
    });

    function OptionClick(name){
        if( name && typeof name === "string"){
            dispatch(setAppWindow({ windowName: name, windowCount : 1 }));
            dispatch(addAppsInTaskbar(name));
        } else {
            name();
        }
    }

    if (show) {
        return (
            <Menu style={{ top: anchorPoint.y, left: anchorPoint.x }} >
                {
                    CntMenu.map((option, i) => (

                        ( option.length !== 1 ) ?
                            <Options key={i} className={option[0]} onClick={() => OptionClick(option[5]) }>
                                <LeftSection>
                                    {
                                        (option[1]) ? <img src={option[1]} alt="a" /> : <Empty />
                                    }
                                    <div>{option[2]}</div>
                                </LeftSection>
                                <RightSection>
                                    {option[3] && <div>{option[3]}</div>}
                                    {
                                        (option[4]) && <img src={option[4]} alt="a" />
                                    }
                                </RightSection>
                            </Options>
                        : 
                        <hr key={i}/>
                    ))
                }
            </Menu >
        )
    }
}

export default RightClickMenu;

const appear = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`

const Menu = styled.ul`
    list-style: none;
    position: absolute;
    background-color: var(--clickMenu);
    box-shadow: 0 10px 20px rgb(64 64 64 / 5%);
    padding: 5px 0px;
    margin: 0px;
    width: 17rem;
    border:1px solid var(--startbg);
    font-size: calc(var(--windowsFontSize) + 1px);
    opacity:1;
    animation: ${appear} 100ms linear;

    hr{
        margin: 4px 10px;
    }

    .disable{
        color:var(--startbg);
    }
`

const Options = styled.li`
    border: none;
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    transition: 0.1s linear;
    height: 1.5rem;
    padding: 0px 10px;
    justify-content: space-between;

    &:not(.disable):hover{
        background-color: white;
    }
`

const LeftSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img{
        height:20px;
        width:20px;
    }
`

const RightSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        height:16px;
        width:16px;
    }
`

const Empty = styled.div`
    height:16px;
    width:16px;
`