import ReactDOM from 'react-dom';
import React from 'react';
import view from './views/meetingList';
import Api from '../utils/api';
import menu from '../utils/menu';

class MeetingsList extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      menu: menu,
      meetings: []
    };
    this.getData();
  }

  async getData() {
    this.setState({
      meetings: (await Api.getMeetings()).data
    });
    console.log(this.state.meetings);
  }

  render(){
    return view(this);
  }
};

export default MeetingsList;
