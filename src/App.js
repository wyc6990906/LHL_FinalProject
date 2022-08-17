import Header from "./components/header/Header";
import Video from "./components/video/Video";
import About from "./components/about/About";
import Tutorial from "./components/tutorial/Tutorial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Mp3Recorder from "./components/mp3Recorder/Mp3Recorder";
import Login from "./components/login/login";
import Signup from "./components/login/signup";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css'
import DrumMachine from "./components/drumMachine/DrumMachine";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-wrapper clearfix">
          <Header/>
          <section className="content">
            <Switch>
              <Route exact={true} path="/">
                <Video/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/contact">
                <Contact/>
              </Route>
              <Route path="/drum_machine">
                <Mp3Recorder/>
                <DrumMachine/>
              </Route>
              <Route path="/tutorial">
                <Tutorial/>
                </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/signup">
                <Signup/>
              </Route>
              {/*No 404 page just redirect*/}
              <Route path="*">
                <Redirect to="/"/>
              </Route>
            </Switch>
          </section>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App
