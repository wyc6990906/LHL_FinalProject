import Header from "./components/header/Header";
import Video from "./components/video/Video";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Login from "./components/login/login";
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
        <div className="main-wrapper clearfix">`
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
                <DrumMachine/>
              </Route>
              <Route path="/login">
                <Login/>
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
