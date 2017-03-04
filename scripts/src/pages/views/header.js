import React from 'react';
import { Link } from 'react-router';

export default (self) => {
  return (
    <header className="header">
        <div className="container border-bottom">
            <div className="left third text-left">
                <Link to="/"><img className="left logo" src="img/logo.png" /></Link>
            </div>

            <div className="left third text-center">
                <strong className="uppercase">09:07</strong><br />
                <small className="light">
                    <strong>Friday 3rd March 2017</strong>
                </small>
            </div>

            <div className="right third text-right">
                Account
            </div>
        </div>
    </header>
  );
};
