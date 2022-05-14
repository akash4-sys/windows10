import React, { useState } from 'react';
import styled from 'styled-components';

function AppsGrid() {

	const [gridNames, setGridNames] = useState({
		Grid1:"Productivity",
		Grid2:"Explore",
		Grid3:"Support",
		Grid4:"Games",
	});

	function handleRename(e) {
		setGridNames({...gridNames, [e.target.name]: e.target.value});
	}

	function HeaderClickHandler(e) {
		e.target.querySelector('input').focus();
		// e.target.querySelector('img').src="";
	}

	return (
		<Box>
			<Container>
				<Header onClick={HeaderClickHandler} >
					<input type="text" value={gridNames.Grid1} onChange={handleRename} name="Grid1"/>
					<i className="fa-solid fa-xmark"></i>
					<GripLines>
						<img src="Images/gripLines.png" alt="grip" id="gripImg" />
					</GripLines>
				</Header>
				<GridContainer>
					<App>
						<div id="border">
							<img src="Images/mail.png" alt="mail" />
							<AppName>Mail</AppName>
						</div>
					</App>
					<App>
						<div id="border">
							<img src="Images/chrome.png" alt="chrome" />
							<AppName>Chrome</AppName>
						</div>
					</App>
					<App>
						<div id="border">
							<img src="Images/vscode.png" alt="VScode" />
							<AppName>VScode </AppName>
						</div>
					</App>
					<App>
						<div id="border">
							<img src="Images/fileexplorer.png" alt="explorer" />
							<AppName>File Explorer</AppName>
						</div>
					</App>
					<App>
						<div id="border">
							<img src="Images/mail.png" alt="mail" />
							<AppName>Mail</AppName>
						</div>
					</App>
					<App>
						<div id="border">
							<img src="Images/mail.png" alt="mail" />
							<AppName>Mail</AppName>
						</div>
					</App>
				</GridContainer>
				<Header onClick={HeaderClickHandler} >
					<input type="text" value={gridNames.Grid2} onChange={handleRename} name="Grid2"/>
					<i className="fa-solid fa-xmark"></i>
					<GripLines>
						<img src="Images/gripLines.png" alt="grip" id="gripImg" />
					</GripLines>
				</Header>
				<GridContainer>
					<App>
						<div id="border">
							<img src="Images/mail.png" alt="mail" />
							<AppName>Mail</AppName>
						</div>
					</App>
					<App>
						<div id="border">
							<img src="Images/chrome.png" alt="chrome" />
							<AppName>Chrome</AppName>
						</div>
					</App>
					<App>
						<div id="border">
							<img src="Images/vscode.png" alt="VScode" />
							<AppName>VScode </AppName>
						</div>
					</App>
					<App>
						<div id="border">
							<img src="Images/fileexplorer.png" alt="explorer" />
							<AppName>File Explorer</AppName>
						</div>
					</App>
					<App>
						<div id="border">
							<img src="Images/mail.png" alt="mail" />
							<AppName>Mail</AppName>
						</div>
					</App>
					<App>
						<div id="border">
							<img src="Images/mail.png" alt="mail" />
							<AppName>Mail</AppName>
						</div>
					</App>
				</GridContainer>
				<Header onClick={HeaderClickHandler} >
					<input type="text" value={gridNames.Grid3} onChange={handleRename} name="Grid3"/>
					<i className="fa-solid fa-xmark"></i>
					<GripLines>
						<img src="Images/gripLines.png" alt="grip" id="gripImg" />
					</GripLines>
				</Header>
				<GridContainer>
					<App>
						<div id="border">
							<img src="Images/mail.png" alt="mail" />
							<AppName>Mail</AppName>
						</div>
					</App>
					<App>
						<div id="border">
							<img src="Images/chrome.png" alt="chrome" />
							<AppName>Chrome</AppName>
						</div>
					</App>
					<App>
						<div id="border">
							<img src="Images/vscode.png" alt="VScode" />
							<AppName>VScode </AppName>
						</div>
					</App>
					<App>
						<div id="border">
							<img src="Images/fileexplorer.png" alt="explorer" />
							<AppName>File Explorer</AppName>
						</div>
					</App>
					<App>
						<div id="border">
							<img src="Images/mail.png" alt="mail" />
							<AppName>Mail</AppName>
						</div>
					</App>
					<App>
						<div id="border">
							<img src="Images/mail.png" alt="mail" />
							<AppName>Mail</AppName>
						</div>
					</App>
				</GridContainer>
			</Container>
		</Box>
	)
}

export default AppsGrid;

const Box = styled.div`
	height:99%;
	width:53.9%;
	overflow-y:auto;
	overflow-x:hidden;
	margin-top:1%;
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
	margin-top: 10px;
	margin-bottom: 10px;
	transition:all 50ms;

	input{
		background-color: transparent;
		border: 0px;
		width:70%;
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

	&:focus-within{
		background-color: white;
		outline:2px solid var(--windowsBlue);
		#gripImg, i{
			display:block;
		}
		div{
			background-color: var(--windowsBlue);
		}
	}
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
	height: 200px;
	grid-template-columns: repeat(3,1fr);
	gap: 3px;
`

const App = styled.div`
	background-color: #818181;
	height:100px;
	width:100px;
	transition: all 50ms;
	display:flex;
	align-items: center;
	justify-content: center;
	position:relative;

	img{
		height:42px;
		width:42px;
	}

	#border{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 96px;
		width: 96px;
	}

	&:hover{
		filter:brightness(1.05);
		#border{
    		border: 2px solid var(--hover-color);
		}
	}
`

const AppName = styled.div`
	position: absolute;
	bottom: 6px;
	left: 10px;
`