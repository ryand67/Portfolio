import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/Footer';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact'

function App() {
  return (
    <body>
      <Router >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/work">
            <Work />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </body>
  );
}

export default App;
