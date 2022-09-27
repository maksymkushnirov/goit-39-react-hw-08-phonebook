import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const activeLink = {
  color: 'rgb(255, 69, 0)',
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        className={styles.link}
        style={({ isActive }) => (isActive ? activeLink : undefined)}
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/login"
        className={styles.link}
        style={({ isActive }) => (isActive ? activeLink : undefined)}
      >
        Log In
      </NavLink>
    </div>
  );
}