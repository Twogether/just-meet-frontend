import React from 'react';
import Helmet from 'react-helmet'
import { Link } from 'react-router';

export default (self) => {
    return (
        <div>
            <Helmet
                title="Just Meet | My Actions"
            />

            <div className="left quarter">
                <nav className="side-nav">
                    {self.state.menu.map((link, index) => {
                        return <Link key={index} to={link.path}><i className={'fa fa-' + link.icon} aria-hidden="true"></i> {link.text}</Link>
                    })}
                </nav>
            </div>

            <div className="right three-quarters white-bg padding-medium">
                <h2>My Actions</h2>
            </div>
        </div>
    );
};
