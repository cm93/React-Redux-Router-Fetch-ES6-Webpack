import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import FormInput from '../FormInput'
import {userLogin, right} from '../../actions/loginAction'

class Login extends Component {
    constructor(props, context) {
        super(props, context);
        this.handClickLogin = this.handClickLogin.bind(this);
        this.handleBlurPhone = this.handleBlurPhone.bind(this);
        this.handleBlurPassword = this.handleBlurPassword.bind(this);
        this.handleFocusPassword = this.handleFocusPassword.bind(this);

        this.state = {
            phone: '',
            phoneError: true,
            password: '',
            passwordError: true
        }
    };
    handClickLogin() {
        if (this.state.phoneError || this.state.passwordError) return;
        this.props.dispatch(userLogin(this.state.phone, this.state.password));
    };
    handleFocusPassword() {
        if (this.props.error === true)
        {
            this.props.dispatch(right());
        }
    };
    handleBlurPhone(value, status) {
        this.setState({
            phone: value,
            phoneError: status
        });
    };
    handleBlurPassword(value, status) {
        this.setState({
            password: value,
            passwordError: status
        });
    };
    shouldComponentUpdate(nextProps) {
        if (nextProps.error !== this.props.error)
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    render() {
        return (
            <li className="content" id="login" >
                <FormInput onBlur={this.handleBlurPhone} required={true} placeholder="手机号" errorText="请输入正确的格式" checkType='phone' size="large">
                </FormInput>
                <div className="cl-10"></div>
                <FormInput onBlur={this.handleBlurPassword} onFocus={this.handleFocusPassword} required={true} placeholder="密码" type="password" errorText="密码错误" checkType='password' size="large" status={this.props.error} />
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

Login.propTypes = {
    error: PropTypes.bool,
};

function mapStateToProps(state) {
    return {
        error: state.loginStatus.hasError
    }
}

export default connect(mapStateToProps)(Login)


