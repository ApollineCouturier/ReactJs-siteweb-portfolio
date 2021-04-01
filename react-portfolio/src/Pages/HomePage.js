import React from 'react';
import {faCodepen, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextTyping from '../Components/TextTyping';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    <div className="texttype"><TextTyping /></div>
                    <span> Apolline Couturier Gauducheau</span>
                </h1>
                <p className="h-sub-text">
                    Bienvenue sur mon site web,<br />
                    Je suis étudiante en 3ème année à epitech<br />
                    Je suis à la recherche d'un stage de 3-4 mois d'Avril à Août (libre le 29 mars)<br />
                    Mon objectif est de travailler dans le développement de logiciels, de sites web et d’applications mobiles.<br />
                </p>
                <div className="icons">
                    <a href="https://www.instagram.com/apollinecgdev/" target="_blank" rel="noreferrer" className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon insta" />
                    </a>
                    <a href="https://github.com/ApollineCouturier" target="_blank" className="icon-holder" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://codepen.io/apollinecouturier/" target="_blank" rel="noreferrer" className="icon-holder">
                        <FontAwesomeIcon icon={faCodepen} className="icon cp"/>
                    </a>
                    <a href="https://www.linkedin.com/in/apolline-couturier-gauducheau-298572180/"  target="_blank" rel="noreferrer" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon link"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
