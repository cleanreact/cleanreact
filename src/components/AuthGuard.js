import React from 'react';
import { Redirect } from 'react-router-dom'; 
import PropTypes from 'prop-types';
// import useAuth from '../hooks/useAuth';

export const AuthGuard = ({ children }) => {
  // const { isAuthenticated } = useAuth();

  // if (!isAuthenticated) {
  //   return <Redirect to="/login" />; //redirect to login page
  // }

  // return (
  //   <>
  //     {children}
  //   </>
  // );
};

AuthGuard.propTypes = {
  children: PropTypes.node
};

// export default AuthGuard;
