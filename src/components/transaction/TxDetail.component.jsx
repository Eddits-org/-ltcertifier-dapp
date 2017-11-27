import React from 'react';
import PropTypes from 'prop-types';

import * as asn1js from 'asn1js';
import * as pkijs from 'pkijs';

const decodeCertificate = (hex) => {
  const raw = hex.indexOf('0x') === 0 ? hex.substring(2) : hex;
  const { buffer } = new Uint8Array(raw.match(/[\da-f]{2}/gi).map(h => parseInt(h, 16)));
  const der = asn1js.fromBER(buffer).result;
  const certificate = new pkijs.Certificate({ schema: der });
  return {
    subject: certificate.subject.typesAndValues.find(t => t.type === '2.5.4.3').value.valueBlock.value,
    issuer: certificate.issuer.typesAndValues.find(t => t.type === '2.5.4.3').value.valueBlock.value
  };
};

const TxDetailComponent = ({ params, account }) => {
  const certificate = decodeCertificate(params.signer_certificate);
  return (
    <div className='columns is-multiline is-gapless'>
      <div className='column is-one-fifth'>
        Common Name
      </div>
      <div className='column is-four-fifths'>
        <strong>
          {certificate.subject}
        </strong>
      </div>
      <div className='column is-one-fifth'>
        Issuer
      </div>
      <div className='column is-four-fifths'>
        <strong>
          {certificate.issuer}
        </strong>
      </div>
      <div className='column is-one-fifth'>
        Ethereum address
      </div>
      <div className='column is-four-fifths'>
        <strong>
          {account}
        </strong>
      </div>
    </div>
  );
};

TxDetailComponent.propTypes = {
  params: PropTypes.object.isRequired,
  account: PropTypes.string.isRequired
};

export default TxDetailComponent;
