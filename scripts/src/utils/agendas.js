import ReactDOM from 'react-dom';
import React from 'react';
import emitter from './eventEmitter';

class Agendas extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return <h1>Agendas List</h1>
  }

};

export default Agendas;
