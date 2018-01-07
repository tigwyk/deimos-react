import React, { Component } from 'react';
import './App.css';
import "material-components-web/material-components-web.scss";
import LayoutGrid from "@react-mdc/layout-grid";

const PATH = 'api/v1/';

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
      <LayoutGrid style={{ width: "720px" }}>
      <LayoutGrid.Cell span={6}>{data.name}</LayoutGrid.Cell>
    <LayoutGrid.Cell span={4}>{data.hps}/{data.max_hps}</LayoutGrid.Cell>
<LayoutGrid.Cell span={2}>${data.credits}</LayoutGrid.Cell>
	</LayoutGrid>
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
