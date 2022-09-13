import React from 'react';
import ReactDOM from 'react-dom/client';
import APP from './App/App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
	<BrowserRouter>
		<APP />
	</BrowserRouter>
);
