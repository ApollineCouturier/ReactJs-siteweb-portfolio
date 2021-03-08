import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaPlay } from "react-icons/fa"
import photome from '../images/man-01.png'; // Tell webpack this JS file uses this image

const Banner = () => {
    return <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="header__content">
                        <div className="header__section">
                            <ul className="header__ul">
                                <li>
                                    <FaFacebookF />
                                </li>
                                <li>
                                    <FaTwitter />
                                </li>
                                <li>
                                    <FaPinterest />
                                </li>
                                <li>
                                    <FaInstagram />
                                </li>
                            </ul>
                            <h1>I am Jonathan Doe</h1>
                            <p>
                                I'm Jonathan, professional web developper with long time
                                experience in this field
                            </p>
                            <div className="header__buttons">
                                <a href="" className="btn btn-outline">
                                    My Portfolio
                                </a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="" className="btn btn-smart">
                                    <FaPlay className="play" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="banner__img">
                    <img src={photome} alt="PhotoMe"/>
                    </div>
                </div>
            </div>
        </div>
    </header>;
};

export default Banner;