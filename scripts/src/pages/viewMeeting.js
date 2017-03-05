import ReactDOM from 'react-dom';
import React from 'react';
import view from './views/viewMeeting';
import Api from '../utils/api';

class MeetingsList extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      id: props.params.id,
      meeting: null
    };
  }

  componentWillMount() {
    this.getData();
  }

  async getData() {
    this.setState({
      meeting: (await Api.getMeeting(this.state.id)).data
    });
  }

  render(){
    return view(this);
  }
};

export default MeetingsList;
