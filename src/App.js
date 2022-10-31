import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './css/mainStyle.css';
import './App.css';
import Colors from './components/Colors.js';
import Genders from './components/Genders.js';

function App() {
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
                <button name="reset" class="center">Restablecer</button>
                <button name="filter" class="center">Filtrar</button>
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
