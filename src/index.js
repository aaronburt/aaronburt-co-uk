import React from 'react';
import ReactDOM from 'react-dom';

/*  Import materialize css file */ 
import 'materialize-css/dist/css/materialize.min.css'

/* Import FontAwesome */ 
import { faInstagram, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"

import './index.css';
import NavigationBar from './Component/NavigationBar';
import { Development } from './Development';

const productionCheck =  process.env.REACT_APP_ENVIROMENT_PRODUCTION === 'TRUE' ? true : false;
if(!productionCheck){ Development() }

console.log('%c Aaron Michael Burt ', 'background: black; color: white; font-size: 25px');
console.log('%c contact@aaronburt.co.uk ', 'background: black; color: white; font-size: 25px');

ReactDOM.render(
  <React.StrictMode>
     
    <NavigationBar 
      title="AB"
      colour="#004d40 teal darken-4"
      navigationlink = {{
        "Instagram": { "icon": faInstagram, "link": "https://www.instagram.com/aaronmichaelburt" }, 
        "Twitter": { "icon": faTwitter, "link": "https://twitter.com/AaronMBurt" },
        "Github": { "icon": faGithub, "link": "https://github.com/aaronburt" }
      }}
    />


  </React.StrictMode>,
  document.getElementById('root')
);
