import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

export default (self) => {
    return (
        <div>
            <Helmet
                title="Just Meet | Meeting List"
            />

            <div className="left quarter">
                <nav>
                    <ul>
                        {self.state.menu.map((link, index) => {
                            return <li key={`menu1-${index}`}><Link to={link.path}>{link.text}</Link></li>
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
                                <tr key={`meeting2-${index}`}>
                                    <td>{meeting.name}</td>
                                    <td>{meeting.starttime}</td>
                                    <td>View</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};