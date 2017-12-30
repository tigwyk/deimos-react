import React, { Component } from 'react';
import './App.css';
import 'material-components-web/material-components-web.scss';

const PATH = 'https://deimos2147.herokuapp.com/api/v1/';

class App extends Component {
  render() {
	  const { msg } = this.state;
    return (
      <div className="App">
	<h1>{msg}</h1>
      </div>
    );
  }

  componentDidMount() {
	  fetch(PATH, {
	  	headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	  })
		  .then(response => response.json())
		  .then(data => this.SetState({ msg: data.msg }));
		}
}

export default App;
