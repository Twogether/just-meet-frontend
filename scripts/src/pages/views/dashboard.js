import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

export default (self) => {
  return (
    <main>
      <Helmet
        title="Just Meet"
      />
      <div className="container">
        <nav className="box-nav">
            {self.state.menu.map((link, index) => {
                return <Link key={index} className="box-nav-link" to={link.path}>{link.text}</Link>
            })}
        </nav>
      </div>
    </main>
  );
};
