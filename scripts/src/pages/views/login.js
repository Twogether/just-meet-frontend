import React from 'react';
import Helmet from 'react-helmet';

export default (self) => {
    return (
        <div>
            <Helmet
                title="Just Meet | Login"
            />

            <div className="hero">
                <span className="logo">Just Meet</span>
            </div>

            <div className="nav-bar">
                <div className="container">
                    <nav>
                        <a href="#">Login</a>
                        <a href="#">Register</a>
                        <a href="#">Forgot Password</a>
                    </nav>
                </div>
            </div>

            <main>
                <div className="container">
                  <form>
                    
                  </form>
                </div>
            </main>
        </div>
    );
};