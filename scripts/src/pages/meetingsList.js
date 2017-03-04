import ReactDOM from 'react-dom';
import React from 'react';
import Api from '../utils/api';

class MeetingsList extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      meetings: []
    };
    this.getData();
  }

  async getData() {
    this.setState({
      meetings: (await Api.getMeetings()).data
    });
  }

  render(){
    console.log(this.state.meetings);
    return (
        <div></div>
    );
  }
};

export default MeetingsList;
