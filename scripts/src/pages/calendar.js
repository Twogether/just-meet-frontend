import ReactDOM from 'react-dom';
import React from 'react';
import view from './views/calendar';
import Api from '../utils/api';
import BigCalendar from 'react-big-calendar';
import Moment from 'react-moment';

class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      calendar: null
    };
    this.getData();
  }

  async getData() {
    // this.setState({
    //   calendar: (await Api.getCalendar()).data
    // });
  }

  render(){
    this.calendar = React.createElement(<BigCalendar />);
    this.calendar.momentLocalizer(Moment);
    
    return view(this);
  }
};

export default Calendar;
