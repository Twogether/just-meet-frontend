import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

export default (self) => {
    return (
        <div>
            <Helmet
                title="Just Meet | View Meeting"
            />

            <div className="full-width white-bg">
                <div className="top-nav">
                    <Link to="/meetings"><i className="fa fa-chevron-left" aria-hidden="true"></i> Back to meetings</Link>
                </div>

                <div className="container">
                    <h3>This is a new meeting</h3>
                    <p>Description goes here...</p>
                </div>
            </div>
        </div>
    );
};
