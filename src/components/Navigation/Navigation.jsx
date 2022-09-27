import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import styles from './Navigation.module.css';

const activeLink = {
  color: 'rgb(255, 69, 0)',
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        className={styles.link}
        style={({ isActive }) => (isActive ? activeLink : undefined)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={styles.link}
          style={({ isActive }) => (isActive ? activeLink : undefined)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;