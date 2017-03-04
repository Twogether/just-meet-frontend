import ReactDOM from 'react-dom';
import React from 'react';
import emitter from './eventEmitter';

class Loader extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };

    emitter.on('loading', loading => {
      this.setState({loading});
    });
  }

  render(){
    return !this.state.loading ? null : (
      <div className="loader">Page is Loading</div>
    );
  }

};

export default Loader;
