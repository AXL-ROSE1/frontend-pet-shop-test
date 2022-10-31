import React from 'react';
import axios from 'axios';

export default class Colors extends React.Component {

  state = {
    colors: "no colors information",
    selected_color: "no selected color"
  }

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon-color")
    .then((response) => {
      this.setState({
        colors: response.data
      })
    })
  }

  onSelectChanged(value) {
    this.setState({
      selected_color: value
    });
  }
  
  render() {    
    if(Array.isArray(this.state.colors["results"]) == true) {
      return(
        <select id="colorsSelect" onChange={this.onSelectChanged.bind(this)}>
          { this.state.colors["results"].map (item => (<option value={item.name}>{item.name}</option>)) }
        </select>
      )
    } else {
      return(
        <p>{this.state.colors}</p>
      )
    }
  }
}
