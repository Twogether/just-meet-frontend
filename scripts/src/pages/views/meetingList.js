import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import Moment from 'react-moment';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default (self) => {
    return (
        <div>
            <Helmet
                title="Just Meet | Meeting List"
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

            <div className="right three-quarters white-bg">
                <div className="top-nav">
                    <Link className="right" to="/meetings/add">Add Meeting <i className="fa fa-plus" aria-hidden="true"></i></Link>
                </div>

                <div className="padding-medium">
                    <h2>Meetings</h2>

                    <BootstrapTable data={self.state.meetings} search={ true } pagination={true} options={self.state.paginationOptions}>
                        <TableHeaderColumn isKey dataField='name'>name</TableHeaderColumn>
                        <TableHeaderColumn dataField='date' dataFormat={ self.dateFormatter }>date</TableHeaderColumn>
                        <TableHeaderColumn dataField='time' dataFormat={ self.timeFormatter }>time</TableHeaderColumn>
                        <TableHeaderColumn dataField='link' dataFormat={ self.linkFormatter }></TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        </div>
    );
};