import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Desktop from './components/DesktopComponents/Desktop';
import Taskbar from './components/Taskbar/Taskbar';
import DefaultCxtMenu from './components/ContextMenu/DefaultCxtMenu';
import NotFound from './components/NotFound/NotFound';

function App() {

	return (
		<Screen>
			<Router>
				<Taskbar />
				<DefaultCxtMenu />
				<Routes>
					<Route path="/" element={<Desktop />} />
					<Route path="*" element={<NotFound />} />
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