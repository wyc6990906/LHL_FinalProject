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
                For each project we establish relationships with partners who we know will help us create added value
                for your project. As well as bringing together the public and private sectors, we make sector
                overarching links to gather knowledge and to learn from each other.</p>
              <p className="col-span-4 sm:col-span-12 res:col-span-12"> Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit.</p>
              <p className="col-span-4 sm:col-span-12 res:col-span-12">
                Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam luptatem quia voluptas sit aspernatur aut odit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
