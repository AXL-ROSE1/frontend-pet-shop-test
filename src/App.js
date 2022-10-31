import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './css/mainStyle.css';
import './App.css';
import Colors from './components/Colors.js';
import Genders from './components/Genders.js';

function App() {
  const [query_color, setColor] = useState("no color data to query yet");
  const [query_gender, setGender] = useState("no gender data to query yet");

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="center">
          <table class="center">
            <tr>
              <td>
                <tr>
                  <td>Color</td>
                  <td class="right">
                    <Colors/>
                  </td>
                </tr>
                <tr>
                  <td>Genero</td>
                  <td class="right">
                    <Genders/>
                  </td>
                </tr>
              </td>
            </tr>
            <tr>
              <td>
                <p>{query_color}</p>
                <p>{query_gender}</p>
                <button name="reset" class="center" onClick={() => (setColor('no color data to query yet'), setGender("no gender data to query yet"))}>Restablecer</button>
                <button name="filter" class="center" onClick={() => (setColor(document.getElementById('colorsSelect').value), setGender(document.getElementById('genderSelect').value))}>Filtrar</button>
              </td>
            </tr>
          </table>
        </div>

        <table class="center">
          <tr>
            <td>
              
            </td>
          </tr>
        </table>
    </div>
  );
}

export default App;
