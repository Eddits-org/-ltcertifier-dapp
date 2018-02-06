import React from 'react';
import { Link } from 'react-router-dom';

const TitleComponent = () => (
  <div>
    <nav className='navbar is-info'>
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/' href='/'>
          <span className='icon is-large' style={{ marginRight: '10px' }}>
            <i className='fa fa-2x fa-id-card-o' />
          </span>
          <span className='title is-size-4 has-text-white'>Ethereum PKI Certifier</span>
        </Link>
        <div className='navbar-burger burger' data-target='navbarExampleTransparentExample' />
      </div>
    </nav>
  </div>
);

TitleComponent.propTypes = {};

export default TitleComponent;
