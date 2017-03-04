import { browserHistory } from 'react-router';

const Authentication = {

  user: null,

  authorise: () => {
    let saved = localStorage.getItem('user');
    if (saved) saved = JSON.parse(saved);
    return saved || !!Authentication.user;
  },

  unauthorise: () => {
    return !Authentication.user;
  },

  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    Authentication.user = user;
    return Authentication.user;
  },

  logout: () => {
    localStorage.removeItem('user');
    delete Authentication.user;
    browserHistory.push({
      pathname: '/login'
    });
  }

};

export default Authentication;