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

                {self.state.meeting && 
                  <div className="container">
                    <h3>{self.state.meeting.name}</h3>
                    <p>{self.state.meeting.start_time} - {self.state.meeting.end_time}</p>
                  </div>
                }
            </div>
        </div>
    );
};
