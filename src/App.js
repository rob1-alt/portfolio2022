import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import ellipse from './img/Ellipse3.svg'
import { Helmet } from 'react-helmet'


const title = 'Robin Pautigny'

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header className="App-header">
        <div className='wrapperHomepage'>
          <div className='halfRight'>
            <h3>
              Bonjour, Je suis Robin Pautigny - étudiant en 3ème année à <a href="https://www.hetic.net/" target="_blank"><span className='heticGreen'>Hetic</span></a>.
              Je m’intéresse aux nouvelles technologies, aux voitures ainsi qu’au marketing. Actuellement à la recherche d’un stage en tant que Chef de projet digital.
            </h3>
          </div>
          <div className='halfLeft'>
            <nav className='menuNav'>
              <ul>
                <li>À propos de moi</li>
                <a href="#1">
                  <li>Projets</li>
                </a>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <header className='App2-header'>
        <scrollpage id='1'></scrollpage>
          <div className='rectangle'>
            <h1>2021</h1>
            <p>
              Spoty API
            </p>
            <span>
              School Project
            </span>
          </div>
      </header>
    </div>
  );
}

export default App;
