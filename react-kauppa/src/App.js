import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Verkkokauppa</h1>
      <div className="header-links">
        <a href="/kirjaudu">Kirjaudu</a>
        <a href="/rekisteroidy">Rekisteröidy</a>
      </div>
    </div>
  );
}

function NavigationBar() {
  return (
  <div id="etusivu">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Etusivu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tuoteryhmät</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Kampanjat</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Yhteystiedot</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

<div>
      <section>
        <h2>Tervetuloa verkkokauppaan!</h2>
        <p>Tervetuloa tutustumaan laajaan valikoimaamme! Meiltä löydät laadukkaat tuotteet koirille, kissoille ja muille lemmikeille.</p>
      </section>
      <section>
        <h2>Suosituimmat tuotteemme</h2>
        <div className="product-grid">
  <div className="product-item">
    <img src="https://picsum.photos/id/1015/400/300" alt="tuotteen kuva" />
    <h3>Tuote 1</h3>
    <p>Kuvaus tuotteesta 1.</p>
    <button>Lisää ostoskoriin</button>
  </div>
  <div className="product-item">
    <img src="https://picsum.photos/id/1016/400/300" alt="tuotteen kuva" />
    <h3>Tuote 2</h3>
    <p>Kuvaus tuotteesta 2.</p>
    <button>Lisää ostoskoriin</button>
  </div>
  <div className="product-item">
    <img src="https://picsum.photos/id/1015/400/300" alt="tuotteen kuva" />
    <h3>Tuote 3</h3>
    <p>Kuvaus tuotteesta 3.</p>
    <button>Lisää ostoskoriin</button>
  </div>
  <div className="product-item">
    <img src="https://picsum.photos/id/1015/400/300" alt="tuotteen kuva" />
    <h3>Tuote 4</h3>
    <p>Kuvaus tuotteesta 4.</p>
    <button>Lisää ostoskoriin</button>
  </div>
  
  <div className="product-item">
    <img src="https://picsum.photos/id/1022/400/300" alt="tuotteen kuva" />
    <h3>Tuote 5</h3>
    <p>Kuvaus tuotteesta 5.</p>
    <button>Lisää ostoskoriin</button>
  </div>
  <div className="product-item">
    <img src="https://picsum.photos/id/1023/400/300" alt="tuotteen kuva" />
    <h3>Tuote 6</h3>
    <p>Kuvaus tuotteesta 6.</p>
    <button>Lisää ostoskoriin</button>
  </div>
  <div className="product-item">
    <img src="https://picsum.photos/id/1022/400/300" alt="tuotteen kuva" />
    <h3>Tuote 7</h3>
    <p>Kuvaus tuotteesta 7.</p>
    <button>Lisää ostoskoriin</button>
  </div>
  <div className="product-item">
    <img src="https://picsum.photos/id/1022/400/300" alt="tuotteen kuva" />
    <h3>Tuote 8</h3>
    <p>Kuvaus tuotteesta 8.</p>
    <button>Lisää ostoskoriin</button>
  </div>
</div>

      </section>
    </div>
  




</div>  );

}


function Tuotteet() {
  const tuotekategoriat = ['Elektroniikka', 'Kirjat', 'Urheilu', 'Ruoka'];

  return (
    <div>
      <h1>Tuotteet</h1>
      <ul>
        {tuotekategoriat.map((kategoria) => (
          <li key={kategoria}>{kategoria}</li>
        ))}
      </ul>
    </div>
  );
}



export default NavigationBar ;

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
