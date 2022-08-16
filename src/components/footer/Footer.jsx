import React from 'react';
import "./Footer.css"

const Footer = () => {

  return (
    <footer id="footer" className="footer clearfix">
      <div className="footer-wrap clearfix">
        <div className="footer-bottom clearfix">
          <div className="container">
            <div className="row">
              <div className="foot-col column column-1 text-center clearfix">
                <div className="logo-footer">
                  <a href="index.html"><img src="img/dugem-logos.png" alt="Logo-Footer"/></a>
                </div>
              </div>

              <div className="foot-col column column-1 text-center clearfix">
                <div className="social-footer" style={{marginTop:"15px"}}>
                  <ul>
                    <li className="soc-icon"><a href="/">Twitter</a></li>
                    <li className="soc-icon"><a href="/">Facebook</a></li>
                    <li className="soc-icon"><a href="/">Instagram</a></li>
                    <li className="soc-icon"><a href="/">Linkedin</a></li>
                    <li className="soc-icon"><a href="https://github.com/wyc6990906/LHL_FinalProject">Github</a></li>
                  </ul>
                </div>
              </div>
              <div className="foot-col column column-1 text-center clearfix">
                <div id="copyright" className="copyright-text">
                  © Copyright 2022, Built by LighthouseLabs All rights By
                  <br/>
                  <a href="https://github.com/wyc6990906/LHL_FinalProject"> Aidan Prior,
                    Boluwatife Ade Ogunlola, Dylan Wang.</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
