import React from 'react';
import {useHistory} from 'react-router-dom';

const LogoutButton = () => {
  const history = useHistory();
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    history.push('/');
  }
  return(<a data-testid="logoutButton" href="#" onClick={logout}>logout</a>);
}

export default LogoutButton;