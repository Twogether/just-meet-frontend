import ReactDOM from 'react-dom';
import React from 'react';
import Api from '../utils/api';

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
    return (
        <div>Calendar</div>
    );
  }
};

export default Calendar;
