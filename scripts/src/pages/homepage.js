import ReactDOM from 'react-dom';
import React from 'react';
import view from './views/homepage';

class Homepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
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
