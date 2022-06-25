import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import DefaultCxtMenu from './components/ContextMenu/DefaultCxtMenu';
import InitialBoot from './components/Boot/InitialBoot';
import ErrorBoundary from './components/Boot/ErrorBoundary';

const Desktop = lazy(() => import('./components/DesktopComponents/Desktop'));
const Taskbar = lazy(() => import('./components/Taskbar/Taskbar'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

function App() {

	return (
		<Screen>
			<Router>
				<Suspense fallback={<InitialBoot />}>
					<ErrorBoundary>
						<Taskbar />
					</ErrorBoundary>
					<DefaultCxtMenu />
					<Routes>
						<Route path="/" element={<Desktop />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Suspense>
			</Router>
		</Screen >
	);
}

export default App;

const Screen = styled.div`
	height:100vh;
	width:100vw;
	overflow:hidden;
` 