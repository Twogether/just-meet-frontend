import ReactDOM from 'react-dom';
import React from 'react';
import view from './views/viewMeeting';

class MeetingsList extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      id: props.params.id
    };
  }

  render(){
    return view(this);
  }
};

export default MeetingsList;
