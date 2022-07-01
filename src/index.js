import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './ReduxStore/Store'
import { Provider } from 'react-redux';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<App />
	</Provider>
	// </React.StrictMode>
);

serviceWorkerRegistration.register();
reportWebVitals();