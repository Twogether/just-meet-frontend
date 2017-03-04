import axios from 'axios';

class Api {

  static get base() {
    return 'http://localhost:3001'
  }

  static async getMeetings() {
    return await axios.get(`${Api.base}/meetings`);
  }

};

export default Api;
