import ReactDOM from 'react-dom';
import React from 'react';
import view from './views/viewMeeting';
import Api from '../utils/api';
import menu from '../utils/menu';

class MeetingsList extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      menu: menu,
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
