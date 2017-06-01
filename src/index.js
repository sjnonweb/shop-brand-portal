import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import store from './store'

const rootLocation = document.getElementById('root');

const rootAppElement = (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(rootAppElement, rootLocation);
registerServiceWorker();
