var React = require('react');
var ReactDOM = require('react-dom');
var Show = require('./Show');
var shows = require('./shows');

ReactDOM.render(
  <Show show={shows} />,
  document.getElementById('root')
);
