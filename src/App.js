import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Services from './Pages/Services';
import Profile from './Pages/Profile';
import Career from './Pages/Career';
import Contact from './Pages/Contact';
import Nav from './Components/nav';

function App() {
  return (
    <Router>
      <div className='container-app'>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/profile" component={Profile} />
          <Route path="/career" component={Career} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
