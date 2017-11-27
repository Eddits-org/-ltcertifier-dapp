import React from 'react';
import PropTypes from 'prop-types';

export default class RedirectComponent extends React.Component {
  componentDidMount() {
    this.form.submit();
  }

  render() {
    return (
      <form ref={(form) => { this.form = form; }} name='auth' method='POST' action='https://orely.test.luxtrust.com/FederatedServiceFrontEnd/saml/dss/req'>
        <input type='hidden' name='samlRequest' value={this.props.samlRequest} />
      </form>
    );
  }
}

RedirectComponent.propTypes = {
  samlRequest: PropTypes.string.isRequired
};
