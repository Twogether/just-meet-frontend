import React from 'react';

export default (self) => {
  return (
    <header class="header">
        <div className="container">
            <div className="left third">
                <img className="left logo" src="img/logo.png" />
            </div>

            <div class="left third text-center">
                <strong class="uppercase">09:07</strong><br />
                <small class="light">Friday 3rd March 2017</small>
            </div>

            <div className="right third">
                Account O
            </div>
        </div>
    </header>
  );
};
