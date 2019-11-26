import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isProtected,
  ...rest
}) {
  const signed = false;

  if (!signed && isProtected) return <Redirect to="/login" />;

  if (signed && !isProtected) return <Redirect to="/" />;

  return <Route {...rest} component={Component} />;
}
