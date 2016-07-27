import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import FormInput from '../FormInput'

class Register extends Component {
    constructor(props, context) {
        super(props, context);
    };
    handleClick() {
    };
    render() {
        return (
            <li className="content" id="register">
                <div className="phone validation">
                    <input type="text" className="uk-width-1-1 uk-form-input uk-form-input-large" placeholder="手机号" />
                </div>

                <div className="cl-10"></div>
                <div className="uk-width-1-1">
                    <div className="left validation code">
                        <input type="text" className="uk-width-1-1 uk-form-input uk-form-input-large" placeholder="验证码" />
                    </div>
                    <div className="right">
                        <button className="uk-width-1-1 uk-button uk-button-normal uk-button-large" type="button" id="send-code">获取验证码</button>
                    </div>
                </div>
                <div className="cl-10"></div>
                <div className="password validation">
                    <input type="password" className="uk-width-1-1 uk-form-input uk-form-input-large" placeholder="密码" />
                </div>
                <div className="cl-20"></div>
                <div className="uk-width-1-1 pl-100">
                    <button className="uk-button uk-button-primary uk-width-1-1 uk-button-large" type="button" id="register-submit">注册</button>
                </div>
                <div className="part">
                    <div className="cl-30"></div>
                    <label className="agree">
                        <input type="checkbox" className="checked" />我已阅读并同意遵守 <a href="https://api.zhixingche.com/m/agreement" className="uk-link-text" target="_blank">法律声明</a> 和 <a href="https://api.zhixingche.com/m/privacy" className="uk-link-text" target="_blank">隐私条款</a>
                    </label>
                </div>
                <div className="cl-36"></div>
            </li>
        )
    }
}

export default connect()(Register)


