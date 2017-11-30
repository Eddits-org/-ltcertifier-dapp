import React from 'react';

import { Link } from 'react-router-dom';

const WelcomComponent = () => (
  <section className='hero'>
    <div className='hero-body'>
      <div>
        <h1 className='title has-text-grey-dark'>
          Ethereum PKI Certifier
        </h1>
        <h2 className='subtitle has-text-grey-dark'>
          Subtitle...
        </h2>
        <nav className='level is-mobile'>
          <div className='level-item has-text-centered'>
            <div>
              <p className='heading'>Identity for Decentralized Apps</p>
              <p className='title'>
                <img src='https://ipfs.io/images/ipfs-illustrations-how-4.svg' alt='icon-1' />
              </p>
            </div>
          </div>
          <div className='level-item has-text-centered'>
            <div>
              <p className='heading'>Linked to Digital ID</p>
              <p className='title'>
                <img src='https://ipfs.io/images/ipfs-illustrations-how-5.svg' alt='icon-2' />
              </p>
            </div>
          </div>
          <div className='level-item has-text-centered'>
            <div>
              <p className='heading'>Auditable</p>
              <p className='title'>
                <img src='https://ipfs.io/images/ipfs-illustrations-how-1.svg' alt='icon-3' />
              </p>
            </div>
          </div>
          <div className='level-item has-text-centered'>
            <div>
              <p className='heading'>Resilient</p>
              <p className='title'>
                <img src='https://ipfs.io/images/ipfs-illustrations-how-2.svg' alt='icon-4' />
              </p>
            </div>
          </div>
        </nav>
        <div className='has-text-centered' style={{ marginTop: '40px' }}>
          <Link to='/certify' href='/certify' className='button is-medium is-primary is-outlined' style={{ marginRight: '20px' }}>
            Certify an address
          </Link>
          <Link to='/verify' href='/verify' className='button is-medium is-primary is-outlined'>
            Verify an address
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default WelcomComponent;
