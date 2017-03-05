import ReactDOM from 'react-dom';
import React from 'react';
import view from './views/meetingList';
import { Link } from 'react-router';
import Api from '../utils/api';
import menu from '../utils/menu';
import Moment from 'react-moment';

class MeetingsList extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            menu: menu,
            meetings: [],
            paginationOptions: {
                alwaysShowAllBtns: true,
                hideSizePerPage: true,
                sizePerPage: 20
            }
        };
        this.getData();
        this.linkFormatter();
    }

    async getData() {
        this.setState({
            meetings: (await Api.getMeetings()).data
        });
    }

    dateFormatter(cell, row, enumObject, index) {
        if (row !== undefined) {
            return (
                <Moment format="MMMM Do YYYY">{row.starttime}</Moment>
            );
        }
    }

    timeFormatter(cell, row, enumObject, index) {
        if (row !== undefined) {
            return (
                 <Moment format="LT">{row.starttime}</Moment>
            );
        }
    }

    linkFormatter(cell, row, enumObject, index) {
        if (row !== undefined) {
            return (
                <Link className="btn-inline" to={`/meeting/${row.id}`}>View</Link>
            );
        }
    }

    render(){
        return view(this);
    }
};

export default MeetingsList;
