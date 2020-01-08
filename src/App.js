import React, { useContext } from 'react';
import { Switch, Route, __RouterContext } from 'react-router-dom';
import './styles/App.scss';
import { useTransition, animated, config } from 'react-spring';

//components
import Home from './pages/Home';
import Services from './pages/Services';
import Profile from './pages/Profile';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Registration from './pages/Registration';

function App() {

  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    config: config.stiff,
    from: { opacity: 0, transform: 'scale(1)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.9)', delay: 0.8 }
  });

  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        {transitions.map(({ item, key, props }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/" component={Home} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/career" component={Career} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/registration" component={Registration} />
            </Switch>
          </animated.div>
        ))}
        <Footer />
      </div>
    </div>
  );
}


export default App;
