import React, { Component, PropTypes } from 'react'
import MuiThemeProvider from '../../node_modules/material-ui/styles/MuiThemeProvider';
import getMuiTheme from '../../node_modules/material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import DIX  from '../helper/const';
import UTIL  from '../helper/util';

export default class TopBar extends Component {
  constructor(props, context) {
    super(props, context);
  };
  handleClick() {
    UTIL.remove(DIX.KEY.KEY_TOKEN);
    UTIL.remove(DIX.KEY.KEY_USER);
    this.context.router.replace('/');
  };
  render() {
    return (
      <div className="top-bar">
        <div className="button" onClick={this.handleClick.bind(this)}>
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <FlatButton label="登出" />
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}

TopBar.contextTypes = {
  router: React.PropTypes.object.isRequired
};


