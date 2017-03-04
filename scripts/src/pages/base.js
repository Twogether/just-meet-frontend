import ReactDOM from 'react-dom';
import React from 'react';
import header from './views/header';
import menu from '../utils/menu';
import Loader from '../utils/loader';
import emitter from '../utils/eventEmitter';
import { RouteTransition } from 'react-router-transition';

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
    return menu;
  }

  render(){
    return (
        <div>
          {header(this)}
          <div className="react-transition-wrapper">
            <RouteTransition pathname={this.props.location.pathname} atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }}>
              <div className="react-transition-container">
                <main>{this.props.children}</main>
              </div>
            </RouteTransition>
          </div>
          <Loader />
        </div>
    );
  }
};

export default Base;
