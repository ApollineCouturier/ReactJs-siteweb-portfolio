import React from "react";
import aboutMePhoto from '../images/circleapo.png'; // Tell webpack this JS file uses this image

const About = () => {
  const [header] = React.useState({
    subHeader: "Sur moi",
  });
  const [state] = React.useState([
    { id: 1, title: "Nom:", text: "Apolline Couturier Gauducheau" },
    { id: 2, title: "Email:", text: "apolline.couturier-gauducheau@epitech.eu" },
    { id: 3, title: "Téléphone:", text: "+336 59 28 13 16" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src={aboutMePhoto} alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <div className="about__info-p1">
                  Je suis étudiante en programmation informatique à l’école Epitech Bordeaux. Je suis en 3eme année<br/>
                  Ma formation initiale (bac littéraire) ne me prédestinait pas vers cette orientation.<br/>
                  J’ai choisi cette voie par passion, car dès l’enfance je rêvais déjà de devenir développeuse.<br/>
                  « combattu souvent, battu parfois, abattu jamais », pourrait être ma devise<br/>
                  Aujourd’hui je me sens à l’aise dans cet univers.<br/>
              </div>
              <div className="about__info-p2">
                  J’aime travailler en groupe et je continue parallèlement à m’investir individuellement à la découverte de nouveaux langages.<br/>
                  J’aime apprendre et je suis toujours aussi passionnée.<br/>
                  Mon objectif est de travailler dans le développement de logiciels, de sites web et d’applications mobiles.<br/>
                  Je suis à la recherche d’un stage de 4 à 5 mois mois d’Avril à Août.  (libre le 29 mars)<br/>
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
