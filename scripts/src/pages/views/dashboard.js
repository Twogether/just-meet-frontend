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

            <div className="left quarter">
                <nav className="side-nav">
                    {self.state.menu.map((link, index) => {
                        return <Link key={index} to={link.path}><i className={'fa fa-' + link.icon} aria-hidden="true"></i> {link.text}</Link>
                    })}
                </nav>
            </div>

            <div className="three-quarters right white-bg padding-medium">
                <div className="container">
                    <h2>Calendar</h2>
                    
                    <BigCalendar events={self.state.events} />
                </div>
            </div>
        </div>
    );
};