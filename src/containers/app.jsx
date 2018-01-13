import React from 'react';
import ReactDOM from "react-dom";

import Welcome from '../components/Welcome';

export default class App extends React.Component {
    render(){
        return (
			<div className="app-container">
				<Welcome />
            </div>
        );
    }
}