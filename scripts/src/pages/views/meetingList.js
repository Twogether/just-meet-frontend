import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import Moment from 'react-moment';

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

            <div className="right three-quarters white-bg padding-medium">
                <div className="top-nav">
                    <Link to="/meetings/add">Add Meeting <i className="fa fa-plus" aria-hidden="true"></i></Link>
                    <Link to="/meetings/join">Join Meeting</Link>
                </div>

                <h2>Meetings</h2>

                <table>
                    <thead>
                        <tr>
                            <td>name</td>
                            <td>date</td>
                            <td>time</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {self.state.meetings.map((meeting, index) => {
                            return (
                                <tr key={index}>
                                    <td>{meeting.name}</td>
                                    <td><Moment format="MMMM Do YYYY">{meeting.starttime}</Moment></td>
                                    <td><Moment format="LT">{meeting.starttime}</Moment></td>
                                    <td><Link className="btn-inline" to={`/meeting/${meeting.id}`}>View</Link></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};