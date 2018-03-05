import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable jsx-a11y/label-has-for,
  react/jsx-no-target-blank, react/prefer-stateless-function,
  react/jsx-no-bind */

class DisclaimerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allChecked: false
    };
  }

  checked() {
    this.setState({
      allChecked: this.check1.checked && this.check2.checked
    });
  }

  render() {
    return (
      <section className='section'>
        <div>
          <h1 className='title has-text-grey-dark'>
            Please read and agree the Terms and Conditions and Privacy Policy
          </h1>
          <div>
            <div className='content'>
              <p>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    style={{ marginRight: '10px' }}
                    onChange={this.checked.bind(this)}
                    ref={(input) => { this.check1 = input; }}
                  />
                  I hereby consent to provide my personal details as included in my LuxTrust
                  certificate to be associated with the Blockchain asset
                  (here a Blockchain address).
                </label>
              </p>
              <div>
                I understand that:
                <ul>
                  <li>
                    My personal information will include my full name,
                    email address and certificate serial number;
                  </li>
                  <li>
                    The information will be stored in the public Ethereum Blockchain governed by
                    the Ethereum Foundation (<a href='https://www.ethereum.org' target='_blank'>https://www.ethereum.org</a>),
                    operated - by definition of Blockchain – in a shared operational
                    model by several nodes operators
                  </li>
                  <li>
                    The information will be used to unambiguously link my personal
                    information to the relevant blockchain asset;
                  </li>
                  <li>
                    The information will be processed by a smart-contract storing it on
                    the blockchain and making it visible to all users of the blockchain;
                  </li>
                </ul>
              </div>
              <p style={{ marginTop: '10px' }}>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    style={{ marginRight: '10px' }}
                    onChange={this.checked.bind(this)}
                    ref={(input) => { this.check2 = input; }}
                  />
                    Due to the nature of Blockchain Technology,
                    my personal information will be stored for an unlimited time.
                    It is possible to remove my association with the Blockchain
                    asset in question at a later date,
                    but the personal information will remain on the blockchain for ever.
                    I therefore will not be able to withdraw my consent
                    given herein with regard to the storage of my personal data
                    on the blockchain at a later stage.
                </label>
              </p>
            </div>
            <button
              className='button is-primary'
              disabled={!this.state.allChecked}
              onClick={this.props.acceptDisclaimer}
            >
              I agree
            </button>
          </div>
        </div>
      </section>
    );
  }
}

DisclaimerComponent.propTypes = {
  acceptDisclaimer: PropTypes.func.isRequired
};

export default DisclaimerComponent;
