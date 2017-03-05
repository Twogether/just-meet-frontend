import ReactDOM from 'react-dom';
import React from 'react';
import emitter from './eventEmitter';
import Gravatar from 'react-gravatar';

class Agendas extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showAdd: false,
      attendees: []
    };
  }

  addAttendee(e) {
    this.state.attendees.push(e.target.value);
    this.setState({
      showAdd: false,
      attendees: this.state.attendees
    });
    console.log(this.state.attendees);
  }

  toggle(e) {
    e.preventDefault();
    this.setState({
      showAdd: !this.state.showAdd
    });
  }

  render(){
    return (
      <div className="add-attendees-list">
        <ul>
          {this.state.attendees.map((attendee, index) => {
            return <li key={`attendee-${index}`}><Gravatar email={attendee} /></li>
          })}
        </ul>
        <button onClick={this.toggle.bind(this)}>Add Attendee</button>
        {this.state.showAdd && <input type="text" placeholder="Enter users email..." onBlur={this.addAttendee.bind(this)}/>}
      </div>
    )
  }

};

export default Agendas;
