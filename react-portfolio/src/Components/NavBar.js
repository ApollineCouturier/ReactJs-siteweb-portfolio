import React from 'react'
import avatar from '../img/logoApolline.jpg';
import {NavLink} from 'react-router-dom';
import {faCodepen, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Accueil
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            Sur Moi
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Me contacter
                        </NavLink>
                    </li>
                </ul>
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
                <footer className="footer">
                    <p>
                    </p>
                </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;
