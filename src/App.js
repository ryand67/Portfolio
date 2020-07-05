import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';
import Home from './components/pages/Home';
import About from './components/pages/About';

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
    </body>
  );
}

export default App;
