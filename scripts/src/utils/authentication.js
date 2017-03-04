import { browserHistory } from 'react-router';

class Authentication {

  static get user() {
    if (!Authentication._user) {
      let saved = localStorage.getItem('user');
      if (saved) saved = JSON.parse(saved);
      return saved;
    }
    return Authentication._user;
  }

  static authorise() {
    let saved = localStorage.getItem('user');
    if (saved) saved = JSON.parse(saved);
    return saved || !!Authentication._user;
  }

  static unauthorise() {
    return !Authentication._user;
  }

  static setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    Authentication._user = user;
    return Authentication._user;
  }

  static logout() {
    localStorage.removeItem('user');
    delete Authentication._user;
    browserHistory.push({
      pathname: '/login'
    });
  }

};

export default Authentication;