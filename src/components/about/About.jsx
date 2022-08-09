import React from 'react';
import "./About.css"

const About = () => {

  return (
    <div className="about-page">
      <div className="container">
        <div className="about-wrap">
          <div className="about-img">
            <img src="img/about-img.png" alt="about-img"/>
          </div>
          <div className="about-text">
            <div className="the-title">
              <h5 className="head-title-2" data-aos="fade-up"> / STORY </h5>
              <h2 className="head-title-1"> Brief About US
                <span className="title-end">.</span></h2>
            </div>
            <div className="the-text grid grid-cols-12 gap-24">
              <p className="col-span-4 sm:col-span-12 res:col-span-12">
                Discover Drum Machine, the best beat maker tool on the App Store!
                You will make awesome beats in no time with its intuitive interface and easy to master features.
                Making music is now accessible for anyone: master Drum Machine and start creating your own music.
              </p>
              <p className="col-span-4 sm:col-span-12 res:col-span-12"> Découvrez Drum Machine, le meilleur outil de
                création de rythmes sur l'App Store ! Vous créerez des rythmes impressionnants en un rien de temps grâce
                à son interface intuitive et ses fonctions faciles à maîtriser. Faire de la musique est désormais
                accessible à tous : maîtrisez Drum Machine et commencez à créer votre propre musique.</p>
              <p className="col-span-4 sm:col-span-12 res:col-span-12">
                Entdecken Sie Drum Machine, das beste Beatmaking-Tool im App Store! Mit der intuitiven
                Benutzeroberfläche und den leicht zu beherrschenden Funktionen werden Sie im Handumdrehen fantastische
                Beats erstellen. Musik machen ist jetzt für jeden möglich: beherrschen Sie Drum Machine und beginnen
                Sie, Ihre eigene Musik zu kreieren.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
