import Header from "./components/header/Header";
import Video from "./components/video/Video";
import About from "./components/about/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-wrapper clearfix">`
          <Header/>
          <section className="content">
            <Switch>
              <Route exact path="/">
                <Video/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              {/*No 404 page just redirect*/}
              <Route path="*">
                <Redirect to="/"/>
              </Route>
            </Switch>
          </section>


        </div>
      </div>
    </Router>
  );
}

export default App
