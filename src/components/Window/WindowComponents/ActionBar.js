import React, { useRef, forwardRef } from 'react';
import styled from 'styled-components';
import '../utils/WindowsAnimation.css'

const ActionBar = forwardRef(({ showFaqBar }, refContainer) => {

    const { windowsRef, positionArray, windowSizeArray } = refContainer.current;
    const posRef = useRef({ X: 0, Y: 0 });
    const maxSize = useRef({ left:false, right:false, top: false });

    function reSizer(Class) {
        let windowCollisionBox = document.getElementById("windowCollisionBox");
        let removeclass = windowCollisionBox.className.split(" ")[2];
        windowCollisionBox.classList.remove(removeclass);
        windowCollisionBox.classList.add(Class);
    }

    function cursorEffect(e, Class, left, top){
        let cursor = document.getElementById("CursorAnimationCircle");
        let removeclass = cursor.className.split(" ")[2];
        cursor.classList.remove(removeclass);
        cursor.classList.add(Class);
        cursor.style.left = (e.pageX - left) + "px";
        cursor.style.top = (e.pageY - top) + "px";
        setTimeout(() => { cursor.classList.remove(Class) }, 1000)
    }

    function removeCollisionBox() {
        let windowCollisionBox = document.getElementById("windowCollisionBox");
        let removeclass = windowCollisionBox.className.split(" ")[2];
        windowCollisionBox.classList.remove(removeclass);
        maxSize.current = { left:false, right:false, top:false };
    }

    function reSizeWindow(parentWindow, width, height){
        parentWindow.style.width = width;
        parentWindow.style.height = height;
        parentWindow.style.top = "0px";
        let i = parseInt(windowsRef.current.slice(-1));
        windowSizeArray.current[i] = [height, width];
        removeCollisionBox();
    }

    function handleMouseUp() {
        let parentWindow = document.getElementById(windowsRef.current);
        parentWindow.removeEventListener('mousemove', update)
        posRef.current.X = 0;
        posRef.current.Y = 0;

        if(maxSize.current.left){
            parentWindow.style.left = "0px";
            parentWindow.style.right = "unset";
            reSizeWindow(parentWindow, "50vw", "100vh");
        }
        else if(maxSize.current.right){
            parentWindow.style.left = "unset";
            parentWindow.style.right = "0px";
            reSizeWindow(parentWindow, "50vw", "100vh");
        }
        else if(maxSize.current.top){
            parentWindow.style.left = "0px";
            reSizeWindow(parentWindow, "100vw", "100vh");
        }

        window.removeEventListener('mouseup', handleMouseUp);
    }

    function handleMouseDown(e) {
        let parentWindow = document.getElementById(windowsRef.current);
        e.preventDefault();
        posRef.current.X = e.clientX;
        posRef.current.Y = e.clientY;
        parentWindow.addEventListener('mousemove', update);
        window.addEventListener('mouseup', handleMouseUp);
    };

    function update(e) {
        let parentWindow = document.getElementById(windowsRef.current);
        let posX = posRef.current.X - e.clientX;
        let posY = posRef.current.Y - e.clientY;
        posRef.current.X = e.clientX;
        posRef.current.Y = e.clientY;
        let left = (parentWindow.offsetLeft - posX) + "px";
        let top = (parentWindow.offsetTop - posY) + "px";
        parentWindow.style.left = left;
        parentWindow.style.top = top;
        let i = parseInt(windowsRef.current.slice(-1));
        positionArray.current[i] = [left, top];

        if (e.pageX < 5) {
            reSizer("preWindowLeft");
            cursorEffect(e, "cursorLeft", 0, 40);
            maxSize.current.left = true;
        }
        else if(e.pageX >= (window.innerWidth - 10)){
            reSizer("preWindowRight");
            cursorEffect(e, "cursorRight", 30, 40);
            maxSize.current.right = true;
        }
        else if (e.pageY < 5 ) {
            reSizer("preWindowTop");
            cursorEffect(e, "cursorTop", 40, 0);
            maxSize.current.top = true;
        }
        else if(e.pageY >= (window.innerHeight - 60)){
            reSizer("preWindowBottom");
            cursorEffect(e, "cursorBottom", 40, 30);
            maxSize.current.top = true;
        }else {
            removeCollisionBox();
        }

    };

    function handleToolBarView(e) {
        let parentWindow = document.getElementById(windowsRef.current).querySelector(".WindowToolBar");
        if (parentWindow.style.display === "none") {
            parentWindow.style.display = "flex";
            e.currentTarget.querySelector("img").src = "Images/uparrow.png";
        } else {
            parentWindow.style.display = "none";
            e.currentTarget.querySelector("img").src = "Images/downarrow.png";
        }
    }

    return (
        <>
            <MoveSection onMouseDown={handleMouseDown} />
            <RightSection>
                <UpperHalf>
                    <div className="minimize">
                        <img src="Images/minimize.png" alt="min" />
                    </div>
                    <div className="maximize">
                        <img src="Images/maximize.png" alt="max" />
                    </div>
                    <div className="closeButton" onMouseEnter={(e) => e.currentTarget.children[0].src = "Images/wclose.png"}
                        onMouseLeave={(e) => e.currentTarget.children[0].src = "Images/close.png"}>
                        <img src="Images/close.png" alt="close" />
                    </div>
                </UpperHalf>

                {
                    showFaqBar &&
                    <LowerHalf>
                        <div onClick={handleToolBarView}><img src="Images/uparrow.png" alt="up" /></div>
                        <div><img src="Images/faq.ico" className="faq" alt="faq" /></div>
                    </LowerHalf>
                }
            </RightSection>
        </>
    )
})

export default ActionBar;

const MoveSection = styled.div`
    height:inherit;
    width:inherit;
    flex-shrink:1;
`
const RightSection = styled.div`
    height:100%;
`

const UpperHalf = styled.div`
    display:flex;
    align-items:center;
    height:60%;

    div{
        height:100%;
        width: 2.86rem;
        display:flex;
        align-items:center;
        justify-content:center;
        transition:all 250ms;

        &:hover{
            background-color:var(--lightGray);
        }
        
        &:active{
            background-color:var(--hover-color);
        }
    }

    .closeButton:hover{
        background-color:red;
    }
    
    img{
        height:12px;
        width:12px;
    }
`

const LowerHalf = styled(UpperHalf)`
    height:40%;
    justify-content: end;
    padding-right:2px;

    div{
        width:15%;
        height:90%;
        transition: none;
        &:hover{
            background-color:var(--windowsHover);
            outline: 0.001px solid var(--windowsSelect);
        }
    }

    .faq{
        height:16px;
        width:16px;
    }
`