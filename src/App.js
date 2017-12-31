import React, { Component } from 'react';
import './App.css';
import 'material-components-web/material-components-web.scss';

const PATH = 'https://deimos2147.herokuapp.com/api/v1/';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
		};
	}
  render() {
	  const { data } = this.state;
      return (
      <div className="App">
	<h1>{data.name}</h1>
      </div>
    );
  }

  componentDidMount() {
	  fetch(PATH+'character', {
	  	headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		credentials: "same-origin"
	  })
		  .then(response => response.json())
		  .then(data => this.setState({ data: data }));
		}
		
}

export default App;
