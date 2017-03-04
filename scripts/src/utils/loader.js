import ReactDOM from 'react-dom';
import React from 'react';
import emitter from './eventEmitter';

class Loader extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    emitter.on('loading', this.onLoading.bind(this));
  }

  onLoading(loading) {
    this.setState({loading});
  }

  render(){
    return !this.state.loading ? <div /> : (
      <div className="loader">Page is Loading</div>
    );
  }

};

export default Loader;
