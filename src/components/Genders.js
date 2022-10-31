import React from 'react';
import axios from 'axios';

export default class Genders extends React.Component {

  state = {
    genders: "no genders information"
  }

  // https://pokeapi.co/api/v2/pokemon-color
  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/gender")
    .then((response) => {
      this.setState({
        genders: response.data
      })
    })
  }

  render() {
    if(Array.isArray(this.state.genders["results"]) == true) {
      return(
        <select id="genderSelect">
          { this.state.genders["results"].map (item => (<option value={item.name}>{item.name}</option>)) }
        </select>
      )
    } else {
      return(
        <p>{this.state.genders}</p>
      )
    }
  }
}
