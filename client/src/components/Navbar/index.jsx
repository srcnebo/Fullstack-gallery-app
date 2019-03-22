import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function navbar({ profile }) {
  return (
    <div className="main-menu ">
      <ul className="nav-container">
        <li>
          <NavLink
            className="navlink"
            activeClassName="activeRoute"
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        {profile.username && (
          <li>
            <NavLink
              className="navlink"
              activeClassName="activeRoute"
              to="/posts/newpost"
            >
              Add post
            </NavLink>
          </li>
        )}
        <li>
          {!profile.username ? (
            <NavLink
              className="navlink"
              activeClassName="activeRoute"
              to="/login/"
            >
              Login
            </NavLink>
          ) : (
            <a className="navlink" href="/auth/logout/">
              Logout
            </a>
          )}
        </li>
        {profile.username && (
          <li>
            <NavLink
              className="navlink"
              activeClassName="activeRoute"
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default navbar;
