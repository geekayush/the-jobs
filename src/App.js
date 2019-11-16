import React from 'react';
import Landing from './pages/Landing'
import 'antd/dist/antd.css';
import './App.css';
import {
	Router,
	Switch,
	Route,
} from "react-router-dom";
import Job from './pages/Job';

let createHistory = require("history").createBrowserHistory;

let history = createHistory();

export default function App() {
	return (
		<Router history={history}>
			<Switch>
				<Route path="/" component={Landing} exact />
				<Route path="/job" component={Job} exact />
			</Switch>
		</Router >
	);
}