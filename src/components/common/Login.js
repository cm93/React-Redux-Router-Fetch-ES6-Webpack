import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import FormInput from '../FormInput'
import {} from '../../actions/loginAction'

class Login extends Component {
    constructor(props, context) {
        super(props, context);
        this.handClickLogin = this.handClickLogin.bind(this);
        this.handleBlurPhone = this.handleBlurPhone.bind(this);
        this.handleBlurPassword = this.handleBlurPassword.bind(this);

        this.state = {
            phone: '',
            password: ''
        }
    };
    handClickLogin() {
        console.log(this.state);
    };
    handleBlurPhone(value) {
        this.setState({
            phone: value
        });
    };
    handleBlurPassword(value) {
        this.setState({
            password: value
        });
    };
    shouldComponentUpdate() {
        return false;
    };
    render() {
        return (
            <li className="content" id="login" >
                <FormInput onBlur={this.handleBlurPhone} required={true} placeholder="手机号" errorText="请输入正确的格式" checkType='phone' size="large">
                </FormInput>
                <div className="cl-10"></div>
                <FormInput onBlur={this.handleBlurPassword} required={true} placeholder="密码" type="password" errorText="请输入正确的格式" checkType='password' size="large" />
                <div className="cl-10"></div>
                <label className="remember">
                    <input type="checkbox" />
                </label>
                <label className="forget">
                    <a href="./store/password.html" className="uk-link-text">忘记密码?</a>
                </label>
                <div className="cl-20"></div>
                <div className="uk-width-1-1 pl-100">
                    <button className="uk-button uk-button-primary uk-width-1-1 uk-button-large" type="button" id="login-submit" onClick={this.handClickLogin}>登录</button>
                </div>
                <div className="uk-section-divider">
                    <span>其他方式登录</span>
                </div>
                <div className="other-login uk-text-center">
                    <div className="icon-weixin" id="weixin">
                    </div>
                </div>
            </li>
        )
    }
}

export default connect()(Login)


