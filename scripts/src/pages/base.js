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
        </div>
    );
  }
};

export default Base;
