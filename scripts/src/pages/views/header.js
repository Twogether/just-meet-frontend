import React from 'react';
import { Link } from 'react-router';
import Moment from 'react-moment';
import Gravatar from 'react-gravatar';

export default (self) => {
  return (
    <header className="header">
        <div className="container border-bottom">
            <div className="left third text-left">
                <Link to="/"><img className="left logo" src="img/logo.png" /></Link>
            </div>

            <div className="left third text-center">
                <strong className="uppercase"><Moment format="HH:mm:ss">{self.state.now}</Moment></strong><br />
                <small className="light">
                    <strong><Moment format="MMMM Do YYYY">{self.state.now}</Moment></strong>
                </small>
            </div>

            <div className="right third text-right" onClick={self.toggleAccountDropdown.bind(self)}>
                Account
                <div className={self.state.accountDropdownOpen ? 'is-open' : 'is-hidden'}>
                  dropdown
                  <Gravatar email="simon.staton@live.co.uk" />
                </div>
            </div>
        </div>
    </header>
  );
};
