import ReactDOM from 'react-dom';
import React from 'react';
import Api from '../utils/api';

class Rooms extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      rooms: []
    };
    this.getData();
  }

  async getData() {
    // this.setState({
    //   rooms: (await Api.getRooms()).data
    // });
  }

  render(){
    return (
        <div>Rooms</div>
    );
  }
};

export default Rooms;
