import React, {useState, useEffect} from 'react';
import  {Link} from "react-router-dom";
import "./Header.css"


const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentActive, setCurrentActive] = useState(0)

  useEffect(() => {
    window.addEventListener("resize", () => {
      const ismobile = window.innerWidth < 768;
      if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);

  //toggle nav in
  const toggleNav = () => {
    const mainMenu = document.querySelector('#main-menu')
    if (mainMenu.style.display === 'block' ) {
      mainMenu.style.display = "none"
    }
    if(mainMenu.style.display === 'none'){
      mainMenu.style.display = "block"
    }
  }
  //toggle menu-link active
  const toggleActiveMenu = () => {
    const ul_menu = document.getElementById("main-menu");
    const li_list = ul_menu.getElementsByTagName("a")
    for (let i = 0, len = li_list.length; i < len; i++) {
      li_list[i].className = 'menu-link';
      li_list[i].index = i;
      li_list[i].onclick = function () {
        setCurrentActive(this.index)
      }
      li_list[currentActive].className = 'menu-link active';
    }
  }


  return (
    <header id="header" className={`${isMobile ? "header-style-1 header-expanded" : "header-style-1"}`}>
      <div className="container">
        <div className="row clearfix">
          <div className="header-clear clearfix">
            <div className="header-content-left clearfix">
              <div className="logo">
                <a href="/"><img src="img/dugem-logos.png" alt="Dugem Logo"/></a>
              </div>
            </div>
            <div className="header-content-center clearfix">
              <nav className="main-nav">
                <input id="main-menu-state" type="checkbox"/>
                <label className="main-menu-btn sub-menu-trigger" htmlFor="main-menu-state">
                  <span className="main-menu-btn-icon" onClick={toggleNav}></span> Toggle main menu visibility
                </label>
                <ul id="main-menu" className="sm sm-clean" onClick={toggleActiveMenu}>
                  <li className="menu-item"><Link to="/" className="menu-link">Home</Link></li>
                  <li className="menu-item"><Link to="/about" className="menu-link">About</Link></li>
                  <li className="menu-item"><Link to="/drum" className="menu-link">Drum Machine</Link></li>
                  <li className="menu-item"><Link to="/tutorial" className="menu-link">Tutorial</Link></li>
                  <li className="menu-item"><Link to="/contact" className="menu-link">Contact</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
