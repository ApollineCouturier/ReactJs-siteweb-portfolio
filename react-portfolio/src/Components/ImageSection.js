import React from 'react';
import about from '../img/myblog/apo.jpg';
import cv from '../img/cvApollineCouturierGauducheau_compressed.pdf';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4><span> Apolline Couturier Gauducheau</span></h4>
                <p className="about-text">
                    Je suis étudiante en programmation informatique à l’école Epitech Bordeaux.
                    Je suis en 3eme année<br /><br />
                    J’aime travailler en groupe et je continue parallèlement à m’investir individuellement à la découverte de nouveaux langages.<br />
                    <br />J’aime apprendre et je suis toujours aussi passionnée.<br />
                    Mon objectif est de travailler dans le développement de logiciels, de sites web et d’applications mobiles.<br />
                    <br />Je suis à la recherche d’un stage de 4 à 5 mois mois d’Avril à Août. (libre le 29 mars)<br />
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Languages</p>
                        <p>Email</p>
                    </div>
                    <div className="right-section">
                        <p>: Apolline Couturier Gauducheau</p>
                        <p>: Français, Anglais</p>
                        <p>: apolline.couturier-gauducheau@epitech.eu</p>
                    </div>
                </div>
                <a href={cv} download><button className="btn">Download Cv</button></a>
                <a href={cv} target="_blank" rel="noreferrer"><button className="btn watch">Watch Cv</button></a>
            </div>
        </div>
    )
}

export default ImageSection;
