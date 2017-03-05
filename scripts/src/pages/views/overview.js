import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import Moment from 'react-moment';

export default (self) => {
    return (
        <div>
            <Helmet
                title="Just Meet | Overview"
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
                <section className="row">
                    <h2>My Recent Meetings</h2>

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
                                        <td><Link className="btn-inline" to={`/dashboard/meeting/${meeting.id}`}>View</Link></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </section>

                <section>
                    <h2>My Recent Actions</h2>

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
                                        <td><Link className="btn-inline" to={`/dashboard/meeting/${meeting.id}`}>View</Link></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
};