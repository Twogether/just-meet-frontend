import React from 'react';
import { Link } from 'react-router';

export default (self) => {
  return (
    <header>
      <div className="container">
          <h1>Just Meet</h1>
      </div>
      <nav>
        <ul>
          {self.links.map((link, index) => {
            return <li key={index}><Link to={link.path}>{link.text}</Link></li>
          })}
        </ul>
      </nav>
    </header>
  );
};
