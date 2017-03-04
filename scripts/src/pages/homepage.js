import ReactDOM from 'react-dom';
import React from 'react';
import view from './views/homepage';
import Api from '../utils/api';

class Homepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.getData();
  }

  async getData() {
    const meetings = await Api.getMeetings();
    console.log(meetings.data);
  }

  componentWillReceiveProps(newProps) {
    this.props = newProps;
  }

  componentWillMount() {
  }

  render(){
    return view(this);
  }

};

export default Homepage;
