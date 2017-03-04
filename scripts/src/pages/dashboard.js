import ReactDOM from 'react-dom';
import React from 'react';
import view from './views/dashboard';
import Api from '../utils/api';
import menu from '../utils/menu';

Api.getUsers().then(res => {
  console.log(res);
});

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        menu: menu,
        meetings: []
    };
    this.getData();
  }

  async getData() {
    // const meetings = await Api.getMeetings();
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
