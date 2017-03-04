import axios from 'axios';

class Api {

  static get base() {
    return 'http://localhost:3001'
  }

  static async createMeeting(data) {
    return await axios.get(`${Api.base}/meetings`);
  }

  static async getMeetings() {
    return await axios.get(`${Api.base}/meetings`);
  }

  static async getActions() {
    return await axios.get(`${Api.base}/actions`);
  }

  static async getRooms() {
    return await axios.get(`${Api.base}/rooms`);
  }

  static async getCalendar() {
    return await axios.get(`${Api.base}/calendar`);
  }

};

export default Api;
