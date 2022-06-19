import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { FoldersList } from './Folderslist';
import { showCxtMenu } from '../../../../Features/CxtMenuSlice/CxtMenuSlice';

function MainContent({ Width }) {

    const dispatch = useDispatch();

    const ItemRef = useRef();
    const ContainerRef = useRef();
    let targetClass;

    function clickOutsideFolder(e) {
        if(!ItemRef.current.contains(e.target)){
            ItemRef.current.removeAttribute('style');
            ItemRef.current.style.outline = "1px solid var(--folderClick)";
            window.removeEventListener('click', clickOutsideFolder);
        }
    }

    function clickOutsideHeader() {
        ContainerRef.current.querySelectorAll(targetClass).forEach(folder => {
            folder.removeAttribute('style');
        });
        window.removeEventListener('click', clickOutsideHeader);
    }

    function handleClick(e) {
        if( ItemRef.current && ItemRef.current !== e.currentTarget ){
            ItemRef.current.removeAttribute('style');
            ItemRef.current.style.outline = "0px";
        }
        ItemRef.current = e.currentTarget;
        e.currentTarget.style.backgroundColor = "var(--folderClick)";
        window.addEventListener('click', clickOutsideFolder);
    }

    function rightClickHandler(e, windowName) {
        dispatch(showCxtMenu({ show: true, cxtMenu: "windowFoldersMenu", type: "window", windowName, anchor:{x:e.pageX, y:e.pageY} }));
        handleClick(e);
    }

    function handleHeaderClick(e, Class) {
        handleClick(e);
        targetClass = Class;
        ContainerRef.current.querySelectorAll(Class).forEach(folder => {
            folder.style.backgroundColor = "var(--folderClick)"
        });
        setTimeout(() => { window.addEventListener('click',  clickOutsideHeader) }, 10)
    }

    return (
        <Container style={{ width: `calc( 100% - ${Width} )` }} ref={ContainerRef}>
            <Header onClick={(e) => handleHeaderClick(e, ".thisPCFolders")} >
                <i className="fa-solid fa-chevron-down" ></i>
                <div>Folders&nbsp;(7)</div>
                <hr />
            </Header>
            <Folders>
                {
                    FoldersList.map((item, i) => (
                        <Folder key={nanoid()} className="thisPCFolders" onClick={handleClick}
                            onContextMenu={(e) => rightClickHandler(e, item[1])} draggable="true"
                        >
                            <img src={item[0]} alt="" />
                            <FolderName>{item[1]}</FolderName>
                        </Folder>
                    ))
                }
            </Folders>
            <Header onClick={(e) => handleHeaderClick(e, ".thispcdrives")}>
                <i className="fa-solid fa-chevron-down" ></i>
                <div>Devices&nbsp;and&nbsp;Drives&nbsp;(7)</div>
                <hr />
            </Header>
            <Folders>
                <Folder className="thispcdrives" onClick={handleClick} onContextMenu={(e) => rightClickHandler(e, "Windows (C:)")} draggable="true">
                    <img src="Images/thispc/windowdrive.ico" alt="" />
                    <Drive>
                        <span>Windows (C:)</span>
                        <DriveMeter>
                            <div></div>
                        </DriveMeter>
                        <DriveStatus>115 GB free of 273 GB</DriveStatus>
                    </Drive>
                </Folder>
                <Folder className="thispcdrives" onClick={handleClick} onContextMenu={(e) => rightClickHandler(e, "Drive (D:)")} draggable="true">
                    <img src="Images/thispc/commondrive.ico" alt="" />
                    <Drive>
                        <span>Drive (D:)</span>
                        <DriveMeter>
                            <div></div>
                        </DriveMeter>
                        <DriveStatus>215 GB free of 473 GB</DriveStatus>
                    </Drive>
                </Folder>
            </Folders>
        </Container>
    )
}

export default MainContent;

const Container = styled.div`
    height:100%;
    overflow-x:hidden;
    overflow-y:visible;
`

const Header = styled.div`
    width:99.5%;
    margin-top:0.5rem;
    height:1.5rem;
    color:slateblue;
    display: flex;
    align-items: center;
    
    div{ width:max-content; }
    i{
        color: var(--hover-color); 
        margin-right:5px;
        font-size:10px;
        padding-left:0.5rem;
    }
    hr{ 
        width:inherit; 
        margin-left: 5px;
        border:0.5px solid var(--linecolor);
    }

    &:hover{
        background:var(--folderSelect);
    }
`

const Folders = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill, 17rem);
    grid-template-rows: repeat(auto-fill, 55px);
    height: max-content;
    margin: 10px 0px 10px 20px;
    gap: 5px;
`

const Folder = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding-left:20px;
    height:3.5rem;

    img{
        height:48px;
        width:48px;
    }

    &:hover{
        background:var(--folderSelect);
    }
`

const FolderName = styled.div`
    height:80%;
`

const Drive = styled.div`
    width:75%;
`

const DriveMeter = styled.div`
    height:1rem;
    background-color: var(--lightGray);

    div{
        width:40%;
        height:inherit;
        background-color: var(--windowsBlue2);
    }
`

const DriveStatus = styled.div`
    color:var(--primary-color);
    height:max-content;
`