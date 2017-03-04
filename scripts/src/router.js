import React from 'react';
import { Router, browserHistory, Link} from 'react-router';
import routes from './routes';

class RouterView extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)} />
    )
  }
};

export default RouterView;