import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// import useAuth from '../hooks/useAuth';


export const GuestGuard = (props) => {
  // const { isAuthenticated } = useAuth();

  // if (isAuthenticated) { 
  //   return <Redirect to="/developer/dashboard" />;
  // }

  

  // return (
  //   <>
  //     {props.children}
  //   </>
  // );
};
GuestGuard.propTypes = {
  children: PropTypes.node
};

//export default GuestGuard;