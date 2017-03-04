import "babel-polyfill";
import ReactDOM from 'react-dom';
import React from 'react';
import Router from './router';

ReactDOM.render(
  <Router />,
  document.getElementById('react-mount')
);
