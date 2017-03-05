import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import Authentiation from './utils/authentication';
import Base from './pages/base';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Actions from './pages/actions';
import AddMeeting from './pages/addMeeting';
import Calendar from './pages/calendar';
import EditMeeting from './pages/editMeeting';
import JoinMeeting from './pages/joinMeeting';
import MeetingsList from './pages/meetingsList';
import ViewMeeting from './pages/viewMeeting';
import Rooms from './pages/rooms';
import NotFound from './pages/404';

function requireAuth(nextState, replace) {
  if (!Authentiation.authorise()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

function requireNoAuth(nextState, replace) {
  if (!Authentiation.unauthorise()) {
    replace({
      pathname: '/dashboard',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

export default [
  <Route path="/">
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/" component={Base}>
      <Route path='login' component={Login} onEnter={requireNoAuth}/>
      <Route path='dashboard' component={Dashboard} onEnter={requireAuth}/>
      <Route path='meetings' component={MeetingsList} onEnter={requireAuth}/>
      <Route path='meetings/add' component={AddMeeting} onEnter={requireAuth}/>
      <Route path='meetings/edit/:id' component={EditMeeting} onEnter={requireAuth}/>
      <Route path='meetings/join' component={JoinMeeting} onEnter={requireAuth}/>
      <Route path='meeting/:id' component={ViewMeeting} onEnter={requireAuth}/>
      <Route path='actions' component={Actions} onEnter={requireAuth}/>
      <Route path='rooms' component={Rooms} onEnter={requireAuth}/>
      <Route path='calendar' component={Calendar} onEnter={requireAuth}/>
      <Route path='logout' component={Calendar} onEnter={Authentiation.logout}/>
      <Route path='404' component={NotFound}/>
    </Route>
    <Redirect from='*' to='/404'/>
  </Route>
];
