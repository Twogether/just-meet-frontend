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

                <BootstrapTable data={self.state.meetings} search={ true } pagination={true} options={self.state.paginationOptions}>
                    <TableHeaderColumn isKey dataField='name'>name</TableHeaderColumn>
                    <TableHeaderColumn dataField='date' dataFormat={ self.dateFormatter }>date</TableHeaderColumn>
                    <TableHeaderColumn dataField='time' dataFormat={ self.timeFormatter }>time</TableHeaderColumn>
                    <TableHeaderColumn dataField='link' dataFormat={ self.linkFormatter }></TableHeaderColumn>
                </BootstrapTable>
            </div>
        </div>
    );
};