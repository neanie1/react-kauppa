import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Etusivu from './Etusivu';
import Tuoteryhmat from './Tuoteryhmat';
import Kampanjat from './Kampanjat';
import Yhteystiedot from './Yhteystiedot';




function Etusivu() {
  return (
    <div>
      </div>
  );
}

function Tuoteryhmat() {
  return (
    <div id='tuoteryhma'>
      <h2>Tuoteryhmät</h2>
      <p>Tähän tulee sisältöä tuoteryhmistä.</p>
    </div>
  );
}

function Kampanjat() {
  return (
    <div>
      <h2>Kampanjat</h2>
      <p>Tähän tulee sisältöä kampanjoista.</p>
    </div>
  );
}

function Yhteystiedot() {
  return (
    <div>
      <h2>Yhteystiedot</h2>
      <p>Tähän tulee sisältöä yhteystiedoista.</p>
    </div>
  );
}


function NavigationBar() {
 
  return (
    <div></div>
  );
}

export default NavigationBar;

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossorigin="anonymous"></script>