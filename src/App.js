import './App.css';
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
              Bonjour, Je suis Robin Pautigny - étudiant en 3ème année à Hetic.
              Je m’intéresse aux nouvelles technologies, aux voitures ainsi qu’au marketing. Actuellement à la recherche d’un stage en tant que Chef de projet digital.
            </h3>
          </div>
          <div className='halfLeft'>
            <nav className='menuNav'>
              <ul>
                <li>À propos de moi</li>
                <li>Projets</li>
                <li>Contact</li>
              </ul>
            </nav>

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
