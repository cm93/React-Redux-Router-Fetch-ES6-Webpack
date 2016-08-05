import 'styles/App.scss';
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import { adminLogin } from '../actions/adminActions';
import DIX  from '../helper/const';

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      password: '',
      username: '',
      errorTextUsername: '',
      errorTextPassword: '',
    };
  };

  handleClick() {
    let username = this.state.username;
    let password = this.state.password;

    if (!password || !username)
    {
      return;
    }
    else
    {
      this.setState({ errorTextUsername: ''});
      this.setState({ errorTextPassword: ''});
      this.props.dispatch(adminLogin(username, password));
    }
  };
  handleBlurUsername(e) {
    this.setState({ username: e.target.value });
    if (!e.target.value)
    {
      this.setState({ errorTextUsername: '请输入用户名'});
    }
  };
  handleBlurPassword(e) {
    this.setState({ password: e.target.value });
    if (!e.target.value)
    {
      this.setState({ errorTextPassword: '请输入密码'});
    }
  };
  handleFocus(type)
  {
    if (type)
    {
      this.setState({ errorTextUsername: ''});
    }
    else
    {
      this.setState({ errorTextPassword: ''});
    }
  };
  render() {
    console.log(status);
    const { status } = this.props;
    if (status === DIX.ERROR.ERROR_WRONG_PASSWORD)
    {
      this.state.errorTextPassword =  '密码错误';
      this.state.errorTextUsername = '';
    }
    else if (status === DIX.ERROR.ERROR_WRONG_USERNAME)
    {
      this.state.errorTextPassword = '';
      this.state.errorTextUsername = '账户不存在';
    }
    return (
      <div className="wrap">
        <div className="login-holder">
          <h3>后台管理中心</h3>

          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <AutoComplete
              hintText="请输入用户名"
              dataSource={[]}
              floatingLabelText="用户名"
              fullWidth={true}
              errorText={this.state.errorTextUsername}
              onBlur={this.handleBlurUsername.bind(this)}
              onFocus={this.handleFocus.bind(this, true)}
            />
          </MuiThemeProvider>

          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <AutoComplete
              type="password"
              hintText="请输入密码"
              dataSource={[]}
              floatingLabelText="密码"
              fullWidth={true}
              errorText={this.state.errorTextPassword}
              onBlur={this.handleBlurPassword.bind(this)}
              onFocus={this.handleFocus.bind(this, false)}
            />
          </MuiThemeProvider>

          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <RaisedButton
              primary={true}
              label="登录"
              className="login"
              onClick={this.handleClick.bind(this)} />
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  status: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    status: state.processStatus.status
  }
}

export default connect(mapStateToProps)(Login)
