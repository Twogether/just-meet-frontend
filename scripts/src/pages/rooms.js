import ReactDOM from 'react-dom';
import React from 'react';
import { Link } from 'react-router';
import Api from '../utils/api';
import view from './views/rooms';
import menu from '../utils/menu';

class Rooms extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            menu: menu,
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
        return view(this);
    }
};

export default Rooms;
