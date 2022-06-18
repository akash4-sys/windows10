import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAppWindow } from '../../Features/AppWindowSlice/AppWindowSlice';
import { setWindowSnapshots } from '../../Features/TaskbarSlice/TaskbarSlice';
import { showCxtMenu } from '../../Features/CxtMenuSlice/CxtMenuSlice';
import WindowMenu from './components/WindowMenu';
import TaskbarMenu from './components/TaskbarMenu';
import ActionBarMenu from './components/ActionBarMenu';
import contextMenuMap from '../Data/contextMenuMap';

function DefaultCxtMenu() {

    const dispatch = useDispatch();
    const CxtMenu = useSelector((state) => state.contextmenu.cxtMenu);
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
    const [show, setShow] = useState(false);

    let cxtMenu = contextMenuMap[CxtMenu.contextMenu];
    if(CxtMenu.windowName){
        cxtMenu[0][5] = CxtMenu.windowName;
        cxtMenu[cxtMenu.length - 1][5] = CxtMenu.windowName;
        if(CxtMenu.contextMenu === "windowFoldersMenu") cxtMenu[1][5] = CxtMenu.windowName;
    }

    function handleContextMenu(e) {
        e.preventDefault();
        setShow(false);
        setAnchorPoint({ x: e.pageX, y:e.pageY, maxHeight:window.innerHeight });
        setTimeout(() => { setShow(true); }, 250);
    };

    function handleClick() {
        dispatch(showCxtMenu({ show: false, cxtMenu: [], type:"", background:"" }));
        window.removeEventListener("contextmenu", handleContextMenu);
        window.removeEventListener("click", handleClick);
    }

    useEffect(() => {
        window.addEventListener("contextmenu", handleContextMenu);
        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("contextmenu", handleContextMenu);
            window.removeEventListener("click", handleClick);
        }
    }, [CxtMenu.anchor]);

    function OptionClick(name){
        if( name && typeof name === "string"){
            dispatch(setAppWindow({ windowName: name, windowCount : 1 }));
            dispatch(setWindowSnapshots(name));
        } else {
            name();
        }
    }

    if (CxtMenu.show && show) {
        switch(CxtMenu.type) {
            case 'window': return ( <WindowMenu anchorPoint={anchorPoint} CxtMenu={cxtMenu} OptionClick={OptionClick} /> );
            case 'taskbar': return ( <TaskbarMenu anchorPoint={anchorPoint} CxtMenu={cxtMenu} OptionClick={OptionClick} /> );
            case 'actionbar': return ( <ActionBarMenu anchorPoint={anchorPoint} CxtMenu={cxtMenu} OptionClick={OptionClick}/>);
            default: return (<></>);
        }
    }
}

export default DefaultCxtMenu;