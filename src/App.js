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
		<LayoutGrid style={{ background: "#9c9c9c" }}>
      <LayoutGrid.Cell span={1}
        style={{
	              background: "#3d3d3d",
	            color: "white",
	                  display: "flex",
	                  justifyContent: "center",
	                  alignItems: "center",
	            padding: 32,
	        }} >{data.name}
		</LayoutGrid.Cell>

    <LayoutGrid.Cell span={2}
        style={{
	                background: "#3d3d3d",
	            color: "white",
		            display: "flex",
		                justifyContent: "center",
			            alignItems: "center",
			                padding: 32,
			            }} >{data.hps}/{data.max_hps}</LayoutGrid.Cell>
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
