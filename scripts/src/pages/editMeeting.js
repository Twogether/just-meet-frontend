import ReactDOM from 'react-dom';
import React from 'react';
import Api from '../utils/api';
import menu from '../utils/menu';
import view from './views/editMeeting';

class EditMeeting extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            menu: menu || [],
            id: props.params.id,
            text: '',
            created: false,
            selectedAttendees: [],
            selectedAdmins: [],
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

    componentWillMount() {
      this.getData();
    }

    async getData() {
      this.setState({
        meeting: (await Api.getMeeting(this.state.id)).data
      });
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
      for(let key in inputs) {
        if(inputs[key].validate && !inputs[key].validate()) {
          valid = false;
        }
      }

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

    removeAdmin(attendee) {
      this.state.selectedAdmins.splice(this.state.selectedAdmins.indexOf(attendee), 1);
      this.setState({
        selectedAdmins: this.state.selectedAdmins
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

    updateAdmins(attendee) {
      attendee.remove = (e) => {
        e.preventDefault();
        this.removeAdmin(attendee);
      };
      this.state.selectedAdmins.push(attendee);
      this.setState({
        selectedAdmins: this.state.selectedAdmins
      });
    }

    changeStartDate(momentDate) {
      this.startDate = momentDate._d;
    }

    changeEndDate(momentDate) {
      this.endDate = momentDate._d;
    }

    createMeeting(data) {
      const postObject = {
        end_time: new Date(this.startDate).toISOString(),
        start_time: new Date(this.endDate).toISOString(),
        name: data.subject
      };
      Api.addMeeting(postObject).then((res) => {
        browserHistory.push({
          pathname: '/meetings'
        });
      });
    }

    handleChange(value) {
        this.setState({ text: value });
    }

    render(){
      console.log(this.state.meeting);
        return view(this);
    }
};

export default EditMeeting;
