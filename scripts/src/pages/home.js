import ReactDOM from 'react-dom';
import React from 'react';
import view from './views/home';
import Api from '../utils/api';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(newProps) {
    this.props = newProps;
  }

  componentWillMount() {
    document.body.className = 'home';
  }

  componentWillUnmount() {
    document.body.className = ''; 
  }

  render(){
    return view(this);
  }

};

export default Home;
