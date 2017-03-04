import ReactDOM from 'react-dom';
import React from 'react';
import view from './views/login';
import api from '../utils/api';
import Authentication from '../utils/authentication';
import { browserHistory } from 'react-router';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
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
      this.login(formData);
    }
  }

  async login(data) {
    api.getUsers().then(res => {
      const user = res.data.filter(user =>  user.email == data.email)[0];
      if (user) {
        Authentication.setUser(user);
        browserHistory.push({
          pathname: '/dashboard'
        });
      } else {
        alert("invalid email");
      }
    });
  }

  render(){
    return view(this);
  }

};

export default Home;
