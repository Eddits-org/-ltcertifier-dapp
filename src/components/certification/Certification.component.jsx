import React from 'react';
import PropTypes from 'prop-types';

const CertificationComponent = ({ certification }) => (
  <div style={{ marginTop: '30px' }}>
    {!certification.certified && (
      <div className='notification is-warning'>
        This address is not certified.
      </div>
    )}
    {certification.certified && (
      <div className='box'>
        <article className='media'>
          <figure className='media-left'>
            <p className='image is-64x64'>
              <span className='icon is-large' style={{ marginRight: '10px' }}>
                <i className='fa fa-2x fa-id-card-o' />
              </span>
            </p>
          </figure>
          <div className='media-content'>
            <div className='content'>
              <div className='columns is-multiline is-gapless'>
                <div className='column is-one-fifth'>
                  Common Name:
                </div>
                <div className='column is-four-fifths'>
                  <strong>
                    {certification.commonName}
                  </strong>
                </div>
                <div className='column is-one-fifth'>
                  Certification Authority:
                </div>
                <div className='column is-four-fifths'>
                  <strong>
                    {certification.issuer}
                  </strong>
                </div>
                <div className='column is-one-fifth'>
                  Ethereum address:
                </div>
                <div className='column is-four-fifths'>
                  <strong>
                    {certification.address}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    )}
  </div>
);

CertificationComponent.propTypes = {
  certification: PropTypes.object.isRequired
};

export default CertificationComponent;
