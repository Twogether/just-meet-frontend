import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import Moment from 'react-moment';

export default (self) => {
    return (
        <div>
            <Helmet
                title="Just Meet | View Meeting"
            />

            <div className="full-width white-bg">
                <div className="top-nav">
                    <Link to="/meetings"><i className="fa fa-chevron-left" aria-hidden="true"></i> Back to meetings</Link>
                    <Link className="right" to={`/meetings/edit/${self.props.params.id}`}><i className="fa fa-pencil" aria-hidden="true"></i> Edit meeting</Link>
                </div>

                {self.state.meeting && 
                  <div className="container">
                    <h3>{self.state.meeting.name}</h3>
                    <p><Moment format="LT">{self.state.meeting.start_time}</Moment> - <Moment format="LT">{self.state.meeting.end_time}</Moment></p>
                  </div>
                }
            </div>
        </div>
    );
};
