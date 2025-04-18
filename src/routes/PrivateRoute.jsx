import React, { Component, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Redirect, Route } from 'react-router-dom';
import { getUser } from '../services/user';
import { useAuth } from '../contexts/auth';

function PrivateRoute({ component: Comp, location, ...rest }) {
  const { signOut } = useAuth();
  const cookies = Cookies.get();

  const clearCookies = async () => {
    let isLogged = true;
    try {
      // Checks token and returns a bool
      isLogged = await getUser();
      if (isLogged === false || !cookies?.access_token) {
        signOut();
      }
    } catch (err) {
      signOut();
    }

    return isLogged
  }

  useEffect(() => {
    clearCookies()
  }, [cookies]);

  return (
    <Route
      {...rest}
      render={props =>
        true ? (
        // cookies.access_token ? (
          <Comp {...props} />
        ) : (
          <Redirect to={{ pathname: "/auth/login", state: { from: location } }} />
        )
      }
    />
  );
}

export default PrivateRoute;
