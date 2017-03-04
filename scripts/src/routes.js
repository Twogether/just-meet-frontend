import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import Base from './pages/base';
import Homepage from './pages/homepage';
import notfound from './pages/404';

export default [
  <Route path="/" component={Base}>
    <IndexRoute component={Homepage}></IndexRoute>
    <Redirect from='*' to='/404'/>
  </Route>
];

    // <Route path='test' component={test}/>