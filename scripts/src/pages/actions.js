import ReactDOM from 'react-dom';
import React from 'react';
import { Link } from 'react-router';
import Api from '../utils/api';
import view from './views/actions';
import menu from '../utils/menu';

class Actions extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            menu: menu,
            actions: []
        };
        this.getData();
    }

    async getData() {
        // this.setState({
        //   actions: (await Api.getActions()).data
        // });
    }

    render(){
        return view(this);
    }
};

export default Actions;
