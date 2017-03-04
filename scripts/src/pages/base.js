import ReactDOM from 'react-dom';
import React from 'react';
import header from './views/header';

class Base extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }


  componentWillReceiveProps(newProps) {
    this.props = newProps;
  }

  render(){
    return (
        <div>
          {header(this)}
          {this.props.children}
        </div>
    );
  }
};

export default Base;
