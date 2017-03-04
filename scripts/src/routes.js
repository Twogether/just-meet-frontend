import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import Base from './pages/base';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Actions from './pages/actions';
import AddMeeting from './pages/addMeeting';
import Calendar from './pages/calendar';
import EditMeeting from './pages/editMeeting';
import JoinMeeting from './pages/joinMeeting';
import MeetingsList from './pages/meetingsList';
import ViewMeeting from './pages/viewMeeting';
import Rooms from './pages/rooms';
import NotFound from './pages/404';

export default [
  <Route path="/">
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/" component={Base}>
      <Route path='dashboard' component={Dashboard}/>
      <Route path='meetings' component={MeetingsList}/>
      <Route path='meetings/add' component={AddMeeting}/>
      <Route path='meetings/edit' component={EditMeeting}/>
      <Route path='meetings/join' component={JoinMeeting}/>
      <Route path='meeting/:id' component={ViewMeeting}/>
      <Route path='actions' component={Actions}/>
      <Route path='rooms' component={Rooms}/>
      <Route path='calendar' component={Calendar}/>
      <Route path='404' component={NotFound}/>
    </Route>
    <Redirect from='*' to='/404'/>
  </Route>
];
