import React, { Component } from 'react';
import './App.css';

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
      <header className="mdc-toolbar">
      <div className="mdc-toolbar__row">
      <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
      <span className="mdc-toolbar__title">Deimos 2147</span>
      </section>
     <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
      <a href="/character" className="material-icons mdc-toolbar__icon">account_circle</a>
      <span className="material-icons mdc-toolbar__icon">favorite</span>
      <span className="material-icons mdc-toolbar__icon">local_atm</span>
      </section>
      </div>
      </header>
      <div className="mdc-layout-grid">
      <div className="mdc-layout-grid__inner">
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
      <h2>{data.name}</h2>
      </div>
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
      <h2>{data.hps}/{data.max_hps}</h2>
      </div>
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
      <h2>{data.location && data.location.name}</h2>
      </div>
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
      <img data-src="holder.js/100px100?theme=lava" alt=""/>
      </div>
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
      <p>{data.location && data.location.description}</p>
      </div>
      </div>
      </div>
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
