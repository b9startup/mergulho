import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RouteWrapper({ component, isProtected, ...rest }) {
  const signed = false;

  if (!signed && isProtected) return <Redirect to="/login" />;

  if (signed && !isProtected) return <Redirect to="/" />;

  return <Route {...rest} component={component} />;
}

RouteWrapper.propTypes = {
  component: PropTypes.func.isRequired,
  isProtected: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isProtected: false,
};
