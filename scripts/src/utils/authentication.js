const Authentication = {

  authorise: () => {
    return !!Authentication.user;
  },

  unauthorise: () => {
    return !Authentication.user;
  },

  setUser: (user) => {
    Authentication.user = user;
    return Authentication.user;
  },

  logout: () => {
    delete Authentication.user;
  }

};

export default Authentication;