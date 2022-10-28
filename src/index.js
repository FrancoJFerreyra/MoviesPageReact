import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './scss/index.scss';
import App from './components/App';
//context
import GeneralState from './contexts/General/GeneralState';

const root = createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<GeneralState>
			<App />
		</GeneralState>
	</BrowserRouter>
);
