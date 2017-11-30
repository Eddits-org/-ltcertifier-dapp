import React from 'react';

import { withRouter } from 'react-router';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavBar from 'components/NavBar.component';
import Footer from 'components/Footer.component';
import Welcome from 'components/Welcome.component';
import Network from 'containers/Network.container';
import Certifier from 'containers/Certifier.container';
import Verifier from 'containers/Verifier.container';

const NavBarWithRouter = withRouter(NavBar);

const AppComponent = () => (
  <Router>
    <div className='container'>
      <NavBarWithRouter />
      <Network />
      <div>
        <Route exact path='/' component={Welcome} />
        <Route path='/certify' component={Certifier} />
        <Route path='/verify' component={Verifier} />
      </div>
      <Footer />
    </div>
  </Router>
);

AppComponent.propTypes = {
};

export default AppComponent;
