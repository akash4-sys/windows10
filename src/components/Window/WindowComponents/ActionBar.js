import React, { useRef, forwardRef } from 'react';
import styled from 'styled-components';

const ActionBar = forwardRef(({ showFaqBar }, refContainer) => {

    const { windowsRef, positionArray } = refContainer.current;
    const posRef = useRef({ X: 0, Y: 0 });
    const maxSize = useRef(false);

    function handleMouseDown(e) {
        let parentWindow = document.getElementById(windowsRef.current);
        e.preventDefault();
        posRef.current.X = e.clientX;
        posRef.current.Y = e.clientY;
        parentWindow.addEventListener('mousemove', update);
        window.addEventListener('mouseup', () => {
            parentWindow.removeEventListener('mousemove', update)
            posRef.current.X = 0;
            posRef.current.Y = 0;

            if (maxSize.current) {
                parentWindow.style.width = "100vw";
                parentWindow.style.height = "100vh";
                parentWindow.style.left = "0px";
                parentWindow.style.top = "0px";
            }
        });
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

        if (e.pageX < 5 || e.pageY < 5) {
            maxSize.current = true;
            return;
        }
    };

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
                    <div className="closeButton">
                        <img src="Images/close.png" alt="close" />
                    </div>
                </UpperHalf>

                {
                    showFaqBar &&
                    <LowerHalf>
                        <div><img src="Images/uparrow.png" alt="up" /></div>
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