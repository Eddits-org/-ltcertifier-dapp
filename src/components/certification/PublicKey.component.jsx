import React from 'react';
import PropTypes from 'prop-types';
import * as pkijs from 'pkijs';
import * as asn1js from 'asn1js';

const arrayBufferToBase64 = (buffer) => {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

const rsaPublicKeyASN1 = (modulus, exponent) => {
  const key = new pkijs.RSAPublicKey({
    modulus: new asn1js.Integer({ value: modulus }),
    publicExponent: new asn1js.Integer({ value: exponent })
  });
  const keyInfos = new pkijs.PublicKeyInfo({
    algorithm: new pkijs.AlgorithmIdentifier({
      algorithmId: 'RSA encryption'
    }),
    subjectPublicKey: key
  });
  console.log(keyInfos);
  return arrayBufferToBase64(keyInfos.toSchema().toBER());
};

const PublicKeyComponent = ({ modulus, exponent }) => (
  <pre>
    {rsaPublicKeyASN1(modulus, exponent)}
  </pre>
);

PublicKeyComponent.propTypes = {
  modulus: PropTypes.string.isRequired,
  exponent: PropTypes.string.isRequired
};

export default PublicKeyComponent;
