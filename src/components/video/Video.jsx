import React from 'react';
import "./Video.css"
import {Link} from "react-router-dom";


const Video = () => {
  return (
      <div className="main-video">
        <div className="image-background"></div>
        <div className="image-title">
          <p>At vero eos et accusamus et iusto odio dignissimos</p>
          <p> ducimus qui blanditiis</p>
          <Link to="/drum" className="button-basic-1" data-aos="fade-up">Let's Play</Link>
        </div>
        <div className="video-background">
          <video autoPlay muted loop id="myVideo">
            <source src="img/concert-loop.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
  );
};

export default Video;
