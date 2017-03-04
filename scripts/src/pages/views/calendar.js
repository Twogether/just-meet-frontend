import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import Moment from 'react-moment';
import BigCalendar from 'react-big-calendar';

export default (self) => {
    return (
        <div>
            <Helmet
                title="Just Meet | Meeting List"
            />

            <div className="full-width white-bg padding-medium">
                <div className="top-nav">
                    <Link to="/dashboard"><i className="fa fa-chevron-left" aria-hidden="true"></i> Back to dashboard</Link>
                </div>

                <div className="container">
                    <h2>Calendar</h2>
                    
                    <BigCalendar />
                </div>
            </div>
        </div>
    );
};