import axios from 'axios';
import Authentication from './authentication';

class Api {

  static get base() {
    return 'http://api.stage.justmeet.io'
  }

  static async getUsers() {
    return await axios.get(`${Api.base}/users`);
  }

  static async getUser() {
    return await axios.get(`${Api.base}/user/${Authentication.user.id}`);
  }

  static async getMeeting() {
    return await axios.get(`${Api.base}/user/${Authentication.user.id}/meetings`);
  }

  static async addMeeting(data) {
    return await axios.post(`${Api.base}/user/${Authentication.user.id}/meetings`, data);
  }

  static async editMeeting(meetingId, data) {
    return await axios.put(`${Api.base}/meeting/${meetingId}`, data);
  }

  static async addMeetingAgenda(meetingId, data) {
    return await axios.put(`${Api.base}/meeting/${meetingId}/agenda`, data);
  }

  static async editMeetingAgenda(meetingId, agendaId, data) {
    return await axios.put(`${Api.base}/meeting/${meetingId}/agenda/${agendaId}`, data);
  }

};

export default Api;
