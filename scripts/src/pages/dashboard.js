import ReactDOM from 'react-dom';
import React from 'react';
import view from './views/dashboard';
import Api from '../utils/api';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.getData();
  }

  async getData() {
    const meetings = await Api.getMeetings();
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

export default Dashboard;
