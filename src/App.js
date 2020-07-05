import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <body>
      <Router >
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Router>
      <Footer />
    </body>
  );
}

export default App;
