import ReactDOM from 'react-dom';
import React from 'react';
import header from './views/header';
import Loader from '../utils/loader';
import emitter from '../utils/eventEmitter';

class Base extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      emitter.emit('loading', false);
    }, 1000); // Slow down initial load so it looks nice
  }

  componentWillMount() {
    emitter.emit('loading', true);
  }

  get links() {
    return [
      {
        text: 'Meetings',
        path: '/meetings'
      },
      {
        text: 'Add Meeting',
        path: '/meetings/add'
      },
      {
        text: 'Edit Meeting',
        path: '/meetings/edit'
      },
      {
        text: 'Join Meeting',
        path: '/meetings/join'
      },
      {
        text: 'Actions',
        path: '/actions'
      },
      {
        text: 'Rooms',
        path: '/rooms'
      },
      {
        text: 'Calendar',
        path: '/calendar'
      }
    ];
  }

  render(){
    return (
        <div>
          {header(this)}
          {this.props.children}
          <Loader />
        </div>
    );
  }
};

export default Base;
