import React from 'react';
import axios from 'axios';

export default class Colors extends React.Component {

  state = {
    colors: "no colors information"
  }

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon-color")
    .then((response) => {
      this.setState({
        colors: response.data
      })
    })
  }
  
  render() {    
    if(Array.isArray(this.state.colors["results"]) == true) {
      return(
        <select id="colorsSelect">
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
