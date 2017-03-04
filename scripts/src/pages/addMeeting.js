import ReactDOM from 'react-dom';
import React from 'react';
import Api from '../utils/api';
import view from './views/addMeeting';
import menu from '../utils/menu';

class AddMeeting extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      menu: menu,
      created: false,
      selectedAttendees: [],
      meetingRooms: [
        {name: 'Room 1', value: '1'},
        {name: 'Room 2', value: '2'}
      ],
      attendees: [
        {name: 'Simon', value: '1'},
        {name: 'Tom', value: '2'}
      ]
    };
  }

  validate(e){
    e.preventDefault();

    // Get inputs
    var self = this,
      valid = true,
      inputs = Object.keys(this.refs).filter(
        key => key.indexOf('form-field-') == 0
      ).reduce((data, key) => {
        data[key] = self.refs[key];
        return data;
      }, {});

    // Validate all inputs
    for(let key in inputs) if(inputs[key].validate && !inputs[key].validate()) valid = false;

    // Handle validation
    if(!valid) {
      e.preventDefault();
    } else {
      const formData = Array.from(e.target.elements)
        .filter(el => el.name)
        .reduce((a, b) => ({...a, [b.name]: b.value}), {});
      this.createMeeting(formData);
    }
  }

  removeAttendees(attendee) {
    this.state.selectedAttendees.splice(this.state.selectedAttendees.indexOf(attendee), 1);
    this.setState({
      selectedAttendees: this.state.selectedAttendees
    });
  }

  updateAttendees(attendee) {
    attendee.remove = (e) => {
      e.preventDefault();
      this.removeAttendees(attendee);
    };
    this.state.selectedAttendees.push(attendee);
    this.setState({
      selectedAttendees: this.state.selectedAttendees
    });
  }

  async createMeeting(data) {
    this.setState({
      created: await Api.createMeeting(data)
    });
  }

  render(){
    return view(this);
  }
};

export default AddMeeting;
