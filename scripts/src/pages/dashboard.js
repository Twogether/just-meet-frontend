import ReactDOM from 'react-dom';
import React from 'react';
import view from './views/dashboard';
import Api from '../utils/api';
import BigCalendar from 'react-big-calendar';
import Moment from 'react-moment';
import moment from 'moment';
import menu from '../utils/menu';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
        menu: menu,
        events: []
    };
  }

  componentWillMount() {
    this.getData();
  }

  async getData() {
    this.setState({
      events: (await Api.getMeetings()).data.map(meeting => {
        meeting.title = meeting.name;
        meeting.start = meeting.start_time;
        meeting.end = meeting.end_time;
        return meeting;
      })
    });
  }

  render(){
    return view(this);
  }
};

export default Dashboard;
