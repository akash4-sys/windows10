import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Desktop from './components/DesktopComponents/Desktop';
import Taskbar from './components/Taskbar/Taskbar';

function App() {
	return (
		<Screen>
			<Router>
				<Taskbar />
				<Routes>
					<Route path="/" element={<Desktop />} />
				</Routes>
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