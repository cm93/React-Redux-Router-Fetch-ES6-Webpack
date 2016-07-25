require('normalize.css/normalize.css');
require('styles/App.scss');

import React, { Component, PropTypes } from 'react'

let yeomanImage = require('./yeoman.png');

class AppComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    };
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
          <a href="test.html">8888</a>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
          {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
