import axios from 'axios';

class Api {

  static get base() {
    return 'http://api.stage.justmeet.io'
  }

  static async getUsers() {
    return await axios.get(`${Api.base}/users/`);
  }

  static async getUser(userId) {
    return await axios.get(`${Api.base}/user/${userId}`);
  }

  static async getMeeting(userId) {
    return await axios.get(`${Api.base}/user/${userId}/meetings`);
  }

  static async addMeeting(userId, data) {
    return await axios.post(`${Api.base}/user/${userId}/meetings`, data);
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
