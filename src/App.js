import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Desktop from './components/DesktopComponents/Desktop';
import Taskbar from './components/Taskbar/Taskbar';
import NotFound from './components/NotFound/NotFound';
import { TaskbarContext } from './components/ContextApi/Context';
import { TaskbarAppsData } from './components/Data/TaskbarApps.js';

function App() {

	const [ TaskbarApps, setTaskBarApps ] = useState(TaskbarAppsData);

	return (
		<Screen>
			<Router>
				<TaskbarContext.Provider value={[ TaskbarApps, setTaskBarApps ]}>
					<Taskbar />
					<Routes>
						<Route path="/" element={<Desktop />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</TaskbarContext.Provider>
			</Router>
		</Screen>
	);
}

export default App;

const Screen = styled.div`
	height:100vh;
	width:100vw;
	overflow:hidden;
` 