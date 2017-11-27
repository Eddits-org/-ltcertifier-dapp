import React from 'react';

const InstallComponent = () => (
  <div className='notification is-warning'>
    <p>
      MetaMask was not found in your browser.
      This extension is required to connect to the Ethereum network.
    </p>
    <p>Please go to MetaMask website and install the extension for your browser</p>
    <a href='https://metamask.io'>
      <img style={{ maxWidth: '200px' }} alt='Download MetaMask' src='https://cdn-images-1.medium.com/max/1600/1*FMNaYm1KqZSZZkqwXASsUg.png' />
    </a>
  </div>
);

export default InstallComponent;
