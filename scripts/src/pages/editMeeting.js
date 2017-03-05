import ReactDOM from 'react-dom';
import React from 'react';
import Api from '../utils/api';
import view from './views/editMeeting';

class EditMeeting extends React.Component {
    
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            text: ''
        };
    }

    componentWillMount() {
      this.getData();
    }

    async getData() {
      this.setState({
        meeting: (await Api.getMeeting(this.state.id)).data
      });
    }

    handleChange(value) {
        this.setState({ text: value });
    }

    render(){
        return view(this);
    }
};

export default EditMeeting;
