import React from 'react';
import { Link } from 'react-router';
import Moment from 'react-moment';
import Gravatar from 'react-gravatar';

export default (self) => {
  return (
    <header className="header">
        <div className="container borde r-bottom">
            <div className="left third text-left">
                <span className="logo">Just Meet</span>
            </div>

            <div className="left third text-center">
                <strong className="uppercase"><Moment format="HH:mm:ss">{self.state.now}</Moment></strong><br />
                <small className="light">
                    <strong><Moment format="MMMM Do YYYY">{self.state.now}</Moment></strong>
                </small>
            </div>

            <div className="right third text-right account-toggle-wrapper">
                <button className="account-toggle" onClick={self.toggleAccountDropdown.bind(self)}><Gravatar email="simon.staton@live.co.uk" />My Account</button>
                <ul className={self.state.accountDropdownOpen ? 'account-dropdown is-open' : 'account-dropdown is-hidden'}>
                  <li><a href="#">Edit</a></li>
                  <li><a href="#">Logout</a></li>
                </ul>
            </div>
        </div>
    </header>
  );
};
