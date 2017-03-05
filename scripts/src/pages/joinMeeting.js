import ReactDOM from 'react-dom';
import React from 'react';
import view from './views/joinMeeting';
import menu from '../utils/menu';

class JoinMeeting extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
        menu: menu || []
    };
  }

  render(){
    return view(this);
  }
};

export default JoinMeeting;
