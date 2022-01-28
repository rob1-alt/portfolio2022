import React, {useState, useEffect} from 'react';
import Loader from './loading'
import { AiOutlineLinkedin } from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai"
import {AiFillMail} from "react-icons/ai"
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMAGES from './img/index';
import ellipse from './img/Ellipse3.svg';
import logoGit from './img/github.png'
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
import Oralb1 from './img/Oralb1.jpg'
import Oralb2 from './img/Oralb2.jpg'
import Oralb3 from './img/Oralb3.jpg'
import Oralb4 from './img/Oralb4.jpg'
import Oralb5 from './img/Oralb5.jpg'
import Corse1 from './img/Corse1.jpg'
import Corse2 from './img/Corse2.jpg'
import Corse3 from './img/Corse3.jpg'
import Corse4 from './img/Corse4.jpg'
import Corse5 from './img/Corse5.jpg'
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';


const title = 'Robin Pautigny'

const settings = {
  dots: false,
  adaptiveHeight : true,
  centerMode: true,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
};


function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoader(false);
    },4000)
  },[])
  return loader ?(
    <header className='App-headerloader'>

      <Loader/>
      <h1>Cooking some magical things...🧙‍♂️</h1>
    </header>
  ) : (
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
        <img src={ellipse} className="upperEllipse"/>
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
              Durant la première semaine intensive de l’année, notre professeur de Design M.Charassin nous a confié une mission. Créer un produit de Design Fiction, c’est une pratique du design qui consiste à explorer les implications d'évolutions futures. Il peut s'agir de futur probable, possible, ou complètement spéculatif. Voici les maquettes de notre produit.
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
      <header className='App3-header'>
          <div className='rectangle'>
            <div className='wrapperText'>
              <div className='leftInfos'>
                <h2>2020</h2>
                <div className='project'>
                  <a target="_blank" href="https://www.figma.com/file/B1FB6DFXA4vCqcIf5iXMvA/Maquette%2Fzoning?node-id=0%3A1">
                  <p className='CorseLink'>
                    Corse Matin
                  </p>
                  </a>
                  <span>
                    School Project
                  </span>
                </div>
              </div>
              <p className='descriptionArticle'>
                Ici pour ce projet, nous avons eu l'honneur d'avoir un vrai client en face de nous. En effet la rédaction de Corse Matin nous a contacté pour repenser le design de leur site internet ainsi que celui de leur application. Voici donc les design que nous avons proposés.
              </p>
              
            </div>
            <Slider {...settings} className='slider'>
          <div>
            <img  className='sliderScreen' src={Corse1}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Corse2}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Corse3}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Corse4}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Corse5}/>
          </div>
        </Slider>
          </div>
      </header>
      <header className='App3-header'>
          <div className='rectangle'>
            <div className='wrapperText'>
              <div className='leftInfos'>
                <h2>2020</h2  >
                <div className='project'>
                  <a target="_blank" href="https://rob1-alt.github.io/index.html">
                  <p className='OralBLink'>
                    Oral-B  .IO 
                  </p>
                  </a>
                  <span>
                    School Project
                  </span>
                </div>
              </div>
              <p className='descriptionArticle'>
                Première semaine intensive de développement web à <a href="https://www.hetic.net/" target="_blank"><span className='heticGreen'>Hetic</span></a> . Mon équipe et moi avons eu pour projet de coder une Landing Page pour la nouvelle brosse à dents de Oral-B.
                Nous avons donc réfléchit a avoir le site le plus corporate possible, quelque chose qui fonctionne bien et qui est épuré.
              </p>
            </div>
            <Slider {...settings} className='slider'>
          <div>
            <img  className='sliderScreen' src={Oralb1}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Oralb2}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Oralb3}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Oralb4}/>
          </div>
          <div>
          <img  className='sliderScreen' src={Oralb5}/>
          </div>
        </Slider>
          </div>
      </header>
      <header className='App3-header'>
        <h1>Robin Pautigny</h1>
        <h2>Made with love test</h2>
        <h3>Social medias :</h3>

        <ul className='socialMedias'>
          <li><a href="https://www.linkedin.com/in/robin-pautigny/" target="_blank"><AiOutlineLinkedin /></a></li>
          <li><a href="https://github.com/rob1-alt" target="_blank"><AiFillGithub/></a></li>
          <li><a href="mailto:robin.pautigny@hetic.net"><AiFillMail/></a></li>
        </ul>
      </header>
    </div>
  );
}

export default App;

