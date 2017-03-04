import ReactDOM from 'react-dom';
import React from 'react';
import view from './views/addMeeting';

class AddMeeting extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
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
      console.log(formData);
      // Post formData here
    }
  }

  render(){
    return view(this);
  }
};

export default AddMeeting;
