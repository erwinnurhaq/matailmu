import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalState } from './GlobalContext';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Profile from './Pages/Profile';
import Career from './Pages/Career';
import Contact from './Pages/Contact';
import Nav from './Components/nav';

function App() {
  return (
    <div className='container-app'>
      <GlobalState>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/profile" component={Profile} />
            <Route path="/career" component={Career} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </GlobalState>
    </div>
  );
}

export default App;
