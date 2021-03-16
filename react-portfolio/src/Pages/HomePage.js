import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

function HomePage() {
    return(
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span>Lorem Ipsum.</span>
                </h1>
                <p className="h-sub-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cupiditate facere, numquam vitae placeat consequatur corrupti officia 
                    quibusdam. Blanditiis doloremque nemo ex facilis neque. 
                    A sint ipsam earum nemo omnis et.
                </p>
                <div className="icons">
                    <Link>
                        <FontAwesomeIcon icon={faFacebook}/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;