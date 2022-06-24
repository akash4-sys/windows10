import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Board } from './MainContentStyle';

function UserBoard({ userCanvas, canvasTitle, setRenameBox, index, setNewBoard }) {

    const [showMore, setShowMore] = useState(false);
    const moreOptRef = useRef();
    const showMoreBtn = useRef();

    useEffect(() => {
        if (!showMore) return
        function handleClickOutside(event) {
            if (!moreOptRef?.current?.contains(event.target) && !showMoreBtn?.current?.contains(event.target))
                setTimeout(() => { setShowMore(false); }, 10);
        }
        document.addEventListener("click", handleClickOutside);
        return () => { document.removeEventListener("click", handleClickOutside); };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showMore]);

    function onClickBoard(e) {
        if(showMoreBtn.current && showMoreBtn.current.contains(e.target)) return;
        if(moreOptRef.current && moreOptRef.current.contains(e.target)) return;
        setNewBoard({ show: true, edit: true, index, title: canvasTitle })
    }

    return (
        <Board onClick={onClickBoard}>
            <BoardImg src={userCanvas} />
            <DetailsBar>
                <BoardDetail>
                    {canvasTitle} <div>Edited: 11:47 PM</div>
                </BoardDetail>
                {showMore &&
                    <MoreOptions ref={moreOptRef}>
                        <Option>
                            <img src="Images/trash.png" alt="D" />
                            Delete
                        </Option>
                        <Option>
                            <img src="Images/flag.png" alt="D" />
                            Report
                        </Option>
                        <Option onClick={() => setRenameBox({ show: true, index })}>
                            <img src="Images/edit.png" alt="edit" />
                            Rename
                        </Option>
                    </MoreOptions>
                }
                <ShowMore ref={showMoreBtn} className="fa-solid fa-ellipsis" onClick={() => showMore ? setShowMore(false) : setShowMore(true)} />
            </DetailsBar>
        </Board>
    )
}

export default UserBoard;

const BoardImg = styled.img`
    height: 70%;
    width:100%;
    border-radius: 10px 10px 0px 0px;
`

const DetailsBar = styled.div`
    height: 30%;
    width:100%;
    border-radius: 0px 0px 10px 10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
    box-shadow: rgb(60 64 67 / 30%) 0px -8px 17px -4px;
`

const BoardDetail = styled.div`
    padding-left: 15px;
    height:calc(100% - 10px);
    width:calc(70% - 15px);
    font-size: 14px;
    font-weight: 600;
    padding-top: 5px;

    div{
        font-size: 12px;
        font-weight: 100;
        margin-top: 3px;
    }
`

const ShowMore = styled.i`
    height: 80%;
    width: 20%;
    text-align: center;
    line-height: 40px !important;
    margin-right: 5px;
    border-radius: 5px;
    &:hover{ background: #e8e8e8; }
    &:active{ background: #d8d8d8; }
`

const settingOptions = keyframes`
    from{ top:-96px; }
    to{ top:-106px; }
`

const MoreOptions = styled.div`
    position: absolute;
    height: 7rem;
    width: 13.5rem;
    top: -106px;
    left: 4px;
    background: white;
    border-radius: 5px 5px 0px 0px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    animation: ${settingOptions} 50ms ease-in;
`

const Option = styled.div`
    width:100%;
    height:33.33%;
    border-radius: 5px 5px 0px 0px;
    display:flex;
    align-items:center;
    font-size: 15px;
    gap:5px;

    img{
        height:20px;
        width:20px;
        margin-left:10px;
    }
    &:hover{ background: #e8e8e8; }
`