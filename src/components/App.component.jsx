import React from 'react';

import { withRouter } from 'react-router';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavBar from 'components/NavBar.component';
import Title from 'components/Title.component';
import Welcome from 'components/Welcome.component';
import Network from 'containers/Network.container';
import Certifier from 'containers/Certifier.container';
import Verifier from 'containers/Verifier.container';

const config = require('config');

const NavBarWithRouter = withRouter(NavBar);

const AppComponent = () => (
  <Router basename={config.baseUrl}>
    <div className='app-content'>
      <Title />
      <Network />
      <div className='main'>
        <div className='container'>
          <div>
            <Route exact path='/' component={Welcome} />
            <Route path='/certify' component={Certifier} />
            <Route path='/verify/:address?' component={Verifier} />
          </div>
        </div>
      </div>
      <footer>
        <NavBarWithRouter />
      </footer>
    </div>
  </Router>
);

AppComponent.propTypes = {
};

export default AppComponent;
