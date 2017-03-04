import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import Base from './pages/base';
import Dashboard from './pages/dashboard';
import NotFound from './pages/404';

export default [
  <Route path="/" component={Base}>
    <IndexRoute component={Dashboard}></IndexRoute>
    <Route path='meetings' component={Dashboard}/>
    <Route path='meetings/add' component={Dashboard}/>
    <Route path='meetings/edit' component={Dashboard}/>
    <Route path='meetings/join' component={Dashboard}/>
    <Route path='actions' component={Dashboard}/>
    <Route path='rooms' component={Dashboard}/>
    <Route path='calendar' component={Dashboard}/>
    <Route path='404' component={NotFound}/>
    <Redirect from='*' to='/404'/>
  </Route>
];
