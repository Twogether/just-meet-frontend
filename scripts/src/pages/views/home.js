import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

export default (self) => {
    return (
        <div>
            <Helmet
                title="Just Meet | Welcome"
            />

            <div className="hero">
                <span className="logo">Just Meet</span>
            </div>

            <div className="nav-bar">
                <div className="container">
                    <nav>
                        <Link to='/features'>Features</Link>
                        <Link to='/faqs'>FAQs</Link>
                        <Link to='/contact'>Get in touch</Link>
                        <Link className="right btn-inline-dark" to='/dashboard'><i className="fa fa-sign-in" aria-hidden="true"></i> Login</Link>
                    </nav>
                </div>
            </div>

            <main>
                <div className="container">
                    <h1>Lorem ipsum heading</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </main>
        </div>
    );
};