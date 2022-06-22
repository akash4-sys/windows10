import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { hoverEffect, cancelHoverEffect } from '../utils/WindowsHoverEffect';
import { setAppWindow } from '../../../Features/AppWindowSlice/AppWindowSlice';
import { setWindowSnapshots } from '../../../Features/TaskbarSlice/TaskbarSlice';
import GridName from './utils/GridName';

function AppsGrid({ setDisplayStartMenu }) {

	const dispatch = useDispatch();
    const AppData = useSelector((state) => state.appwindow);

	let gridAppBGC = "rgba(255,255,255,0.3)";
	const [gridNames, setGridNames] = useState({
		Grid1: "Productivity",
		Grid2: "Explore",
		Grid3: "Support"
	});

	// function handleClickOutsideHeader(e){
	// 	if(headerRef?.current?.contains(e.target)) return;
	// 	setGridNames({ ...gridNames, [headerRef.current.querySelector('input').name]: headerRef.current.querySelector('input').value });
	// 	document.removeEventListener('click', handleClickOutsideHeader);
	// }

	function HeaderClickHandler(e) {
		e.currentTarget.querySelector('input').focus();
		e.currentTarget.querySelector('img').src = "Images/gripLinesW.png";
		// document.addEventListener('click', handleClickOutsideHeader);
		// headerRef.current = e.currentTarget;
	}

	function handleClick(name) {
		dispatch(setAppWindow({ windowName: name, windowCount: 1 }));
		dispatch(setWindowSnapshots(name));
		setDisplayStartMenu(false);
	}

	return (
		<Box>
			<Container>
				{
					Object.keys(gridNames).map((key, index) => (
						<div key={nanoid()}>
							<Header onClick={HeaderClickHandler} draggable="true">
								<GridName value={gridNames[key]} currKey={key} />
								<GripLines>
									<img src="Images/gripLines.png" alt="grip" id="gripImg" />
								</GripLines>
							</Header>
							<GridContainer>
								{
									Object.keys(AppData).map((app, _) => (

										(AppData[app].startmenu.show && AppData[app].startmenu.gridID === index) ?
										<App key={nanoid()} draggable="true" onMouseMove={hoverEffect} 
											onMouseLeave={(e) => cancelHoverEffect(e, gridAppBGC)}
											onClick={() => handleClick(AppData[app].name)}
										>
											<img src={AppData[app].image} alt={AppData[app].name} />
											<AppName>{AppData[app].name}</AppName>
										</App>
										: null
										
									))
								}
							</GridContainer>
						</div>
					))
				}
			</Container>
		</Box>
	)
}

export default AppsGrid;

const Box = styled.div`
	height:100%;
	width:53.9%;
	overflow-y:auto;
	overflow-x:hidden;
	font-size:13px;

	&::-webkit-scrollbar{
        width:3px;
    }

    &::-webkit-scrollbar-thumb{
        border-radius:5px;
    }

    &:hover::-webkit-scrollbar-thumb{
        background-color:dimgray;
    }

    ::-webkit-scrollbar-track:hover{
        background: gray; 
    }
`

const Container = styled.div`
	padding:0px 10px 100px 10px;
	height:100%;
`

const Header = styled.div`
	height:30px;
	display:flex;
	align-items:center;
	justify-content:space-between;
	margin-top: 15px;
	margin-bottom: 8px;
	transition:all 50ms;

	input{
		background-color: transparent;
		border: 0px;
		width:70%;
	}

	input:hover{
		cursor:default;
	}

	i{
		display:none;
		color: lightgray;
	}

	&:hover{
		#gripImg{
			display:block;
		}
	}

	input:focus-visible{
		outline: none;
		padding-left:5px;
	}

	&:focus-within, &:active{
		background-color: white;
		outline:2px solid var(--windowsBlue);
		#gripImg, i{
			display:block;
		}
		div{
			background-color: var(--windowsBlue);
		}
	}

	&:active{ input{ padding-left:5px; } };
`

const GripLines = styled.div`
	height: 100%;
	width: 50px;
	display: flex;
	align-items: center;
	justify-content: center;

	img{
		height: 16px;
    	width: 20px;
		display:none;
	}
`

const GridContainer = styled.div`
	display: grid;
	width: 100%;
	// height: 200px;
	height: fit-content;
	grid-template-columns: repeat(3,1fr);
	gap: 3px;
`

const App = styled.div`
	background-color: rgba(255,255,255,0.3);
	height:100px;
	width:100px;
	transition: all 50ms;
	display:flex;
	align-items: center;
	justify-content: center;
	position:relative;
	border: 1px solid transparent;

	img{
		height:42px;
		width:42px;
	}
`

const AppName = styled.div`
	position: absolute;
	bottom: 6px;
	left: 10px;
`