import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

export default (self) => {
    console.log(self.state.meetings);

    return (
        <div>
            <Helmet
                title="Just Meet | Meeting List"
            />

            <div className="left quarter">
                <nav>
                    <ul>
                        {self.state.menu.map((link, index) => {
                            return <li><Link key={index} to={link.path}>{link.text}</Link></li>
                        })}
                    </ul>
                </nav>
            </div>

            <div className="right three-quarters white-bg padding-medium">
                <h2>Meetings</h2>

                <table>
                    <tbody>
                        {self.state.meetings.map((meeting, index) => {
                            return (
                                <tr key={index}>
                                    <td>{meeting.name}</td>
                                    <td>{meeting.starttime}</td>
                                    <td><Link key={index} to={meeting.path}>View</Link></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};