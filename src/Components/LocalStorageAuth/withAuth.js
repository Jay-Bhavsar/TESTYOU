import React from 'react';

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      // redirect to login page if user is not logged in
      window.location.href = '/login';
      return null;
    }
    return <Component {...props} />;
  };
  return AuthenticatedComponent;
};

export default withAuth;