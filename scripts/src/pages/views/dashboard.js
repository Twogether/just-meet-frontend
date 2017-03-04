import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

export default (self) => {
  return (
    <div>
      <Helmet
        title="Just Meet | Overview"
      />
      <div className="container-narrow">
        <div className="box-nav">
            {self.state.menu.map((link, index) => {
                return (
                    <div className="row" key={`menu1-${index}`}>
                        <h2><Link key={`menu1-${index}`} to={link.path}>{link.text}</Link></h2>
                        <div className="menu-row">
                            {link.children && link.children.map((link, index) => {
                                return <Link key={`child-${index}`} className="box-nav-link" to={link.path}>{link.text}</Link>
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
      </div>
    </div>
  );
};