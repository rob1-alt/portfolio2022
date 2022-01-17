import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ellipse from './img/Ellipse3.svg';
import Spoty1 from './img/Spoty1.jpg';
import Spoty2 from './img/Spoty2.jpg';
import Spoty3 from './img/Spoty3.jpg';
import Spoty4 from './img/Spoty4.jpg';
import Spoty5 from './img/Spoty5.jpg';
import Spoty6 from './img/Spoty6.jpg';
import Spoty7 from './img/Spoty7.jpg';
import Spoty8 from './img/Spoty8.jpg';
import Fast1 from './img/Fast1.jpg';
import Fast2 from './img/Fast2.jpg';
import Fast3 from './img/Fast3.jpg';
import Fast4 from './img/Fast4.jpg';
import Fast5 from './img/Fast5.jpg';
import Fast6 from './img/Fast6.jpg';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';


const title = 'Robin Pautigny'

const settings = {
  dots: true,
  adaptiveHeight : true,
  centerMode: true,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
};

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
            <div className='wrapperText'>
              <div className='leftInfos'>
                <h2>2021</h2  >
                <div className='project'>
                  <a target="_blank" href="https://spoty-react.vercel.app/">
                  <p className='SpotyLink'>
                    Spoty API
                  </p>
                  </a>
                  <span>
                    School Project
                  </span>
                </div>
              </div>
              <p className='descriptionArticle'>
                  Durant une seconde semaine intensive nous avons eu pour objectif de créer un service fullstack grâce à une API. Mon équipe et moi avons choisi l’API de Spotify. Vous pouvez voir ici les maquettes de notre front. Si vous voulez jeter un coup d’oeil à notre code je vous laisse aller voir les repo Spoty sur mon <a href='https://github.com'><span>Github</span></a>.
                </p>
            </div>
            <Slider {...settings}  className='slider'>
          <div>
            <img  className='sliderScreen' src={Spoty1}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Spoty2}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Spoty3}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Spoty4}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Spoty5}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Spoty6}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Spoty7}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Spoty8}/>
          </div>
        </Slider>
      </div>
      </header>
      <header className='App3-header'>
          <div className='rectangle'>
            <div className='wrapperText'>
              <div className='leftInfos'>
                <h2>2021</h2  >
                <div className='project'>
                  <a target="_blank" href="https://fastnight.vercel.app/">
                  <p className='FastLink'>
                    Fastnight
                  </p>
                  </a>
                  <span>
                    School Project
                  </span>
                </div>
              </div>
              <p className='descriptionArticle'>
              Durant une première semaine intensive de l’année, notre professeur de Design M.Charassin nous a confié une mission. Créer un produit de Design Fiction, c’est une pratique du design qui consiste à explorer les implications d'évolutions futures. Il peut s'agir de futur probable, possible, ou complètement spéculatif. Voici les maquettes de notre produit.
              </p>
            </div>
            <Slider {...settings} className='slider'>
          <div>
            <img  className='sliderScreen' src={Fast1}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Fast2}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Fast3}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Fast4}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Fast5}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Fast6}/>
          </div>
        </Slider>

          </div>
      </header>
    </div>
  );
}

export default App;

