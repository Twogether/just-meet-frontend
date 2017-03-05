import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import Moment from 'react-moment';
import Gravatar from 'react-gravatar';

export default (self) => {
    return (
        <div>
            <Helmet
                title="Just Meet | View Meeting"
            />

            <div className="left quarter">
                <nav className="side-nav">
                    <ul>
                        {self.state.menu.map((link, index) => {
                            return (
                                <li key={index}>
                                    <Link to={link.path}><i className={'fa fa-' + link.icon} aria-hidden="true"></i> {link.text}</Link>
                                    <ul className="sub-menu">
                                        {link.children && link.children.map((link, index) => {
                                            return (
                                                <li key={`child-${index}`}><Link to={link.path}><i className={'fa fa-' + link.icon} aria-hidden="true"></i> {link.text}</Link></li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            <div className="right three-quarters white-bg padding-medium">
                <div className="top-nav">
                    <Link to="/meetings"><i className="fa fa-chevron-left" aria-hidden="true"></i> Back to meetings</Link>
                    <Link className="right" to={`/meetings/edit/${self.props.params.id}`}><i className="fa fa-pencil" aria-hidden="true"></i> Edit meeting</Link>
                </div>

                {self.state.meeting && 
                  <div className="container">
                    <h3>{self.state.meeting.name}</h3>
                    <p><Moment format="LT">{self.state.meeting.start_time}</Moment> - <Moment format="LT">{self.state.meeting.end_time}</Moment></p>
                    <div className="attendees-wrapper">
                      <h3>Attendees</h3>
                      <div className="attendees-list">
                        <div className="attendee-box quarter left">
                          <Gravatar email="jon.busby@wearetwogether.com" />
                          <p>Jon Busby</p>
                        </div>
                        <div className="attendee-box quarter left">
                          <Gravatar email="simon.staton@wearetwogether.com" />
                          <p>Simon Staton</p>
                        </div>
                        <div className="attendee-box quarter left">
                          <Gravatar email="emily.shepherd@wearetwogether.com" />
                          <p>Emily Shepherd</p>
                        </div>
                        <div className="attendee-box quarter left">
                          <Gravatar email="tom.clarke@wearetwogether.com" />
                          <p>Tom Clarke</p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
            </div>
        </div>
    );
};
