import React from 'react';
import {faCodepen, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Bienvenue, Je suis<br />
                    <span> Apolline Couturier Gauducheau</span>
                </h1>
                <p className="h-sub-text">
                    Bienvenue sur mon site web,<br />
                    Je suis étudiante en 3ème année à epitech<br />
                    Je suis à la recherche d'un stage de 4-5 mois d'Avril à Août (libre le 29 mars)<br />
                    Mon objectif est de travailler dans le développement de logiciels, de sites web et d’applications mobiles.<br />
                </p>
                <div className="icons">
                    <Link to="#" className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon insta" />
                    </Link>
                    <a href="https://github.com/ApollineCouturier" target="_blank" className="icon-holder" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://codepen.io/apollinecouturier/" className="icon-holder">
                        <FontAwesomeIcon icon={faCodepen} className="icon cp"/>
                    </a>
                    <a href="https://www.linkedin.com/in/apolline-couturier-gauducheau-298572180/" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon link"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
