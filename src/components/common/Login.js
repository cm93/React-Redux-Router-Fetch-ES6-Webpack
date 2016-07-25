import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class Login extends Component {
    constructor(props, context) {
        super(props, context);
    };
    render() {
        return (
            <div>
                <ReactCSSTransitionGroup component="div" transitionAppear={this.props.status ? true : false} transitionName="example"  transitionEnter={this.props.status ? true : false} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    <div key={123} id="login-holder" className="animation-fade-top-in" style={{display: this.props.status ? 'block' : 'none'}}>
                        <div className="login-holder" id="login-part">
                            <ul className="uk-tab" data-connect="#uk-login">
                                <li className="section active" data-id="1"><a href="javascript:;">登录</a></li>
                                <li className="section" data-id="2"><a href="javascript:;">注册</a></li>
                            </ul>
                            <ul className="uk-content" id="uk-login">
                                <li className="content" id="login">
                                    <div className="validation phone">
                                        <input type="text" className="uk-width-1-1 uk-form-input uk-form-input-large" placeholder="手机号" />
                                    </div>
                                    <div className="cl-10"></div>
                                    <div className="validation password">
                                        <input type="password" className="uk-width-1-1 uk-form-input uk-form-input-large" placeholder="密码" />
                                    </div>
                                    <div className="cl-10"></div>
                                    <label className="remember">
                                        <input type="checkbox" />
                                    </label>
                                    <label className="forget">
                                        <a href="./store/password.html" className="uk-link-text">忘记密码?</a>
                                    </label>
                                    <div className="cl-20"></div>
                                    <div className="uk-width-1-1 pl-100">
                                        <button className="uk-button uk-button-primary uk-width-1-1 uk-button-large" type="button" id="login-submit">登录</button>
                                    </div>
                                    <div className="uk-section-divider">
                                        <span>其他方式登录</span>
                                    </div>
                                    <div className="other-login uk-text-center">
                                        <div className="icon-weixin" id="weixin">
                                        </div>
                                    </div>
                                </li>
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
                            </ul>

                        </div>
                        <div className="login-holder" id="password-part">
                            <ul className="uk-tab">
                                <li className="section active" data-id="2"><a href="javascript:;" style={{float: 'left',marginLeft: '25px'}}>请输入密码</a></li>
                            </ul>
                            <ul className="uk-content">
                                <li className="content" style={{display: 'list-item'}}>
                                    <div className="cl-10"></div>
                                    <div className="password validation">
                                        <input type="password" className="uk-width-1-1 uk-form-input uk-form-input-large" placeholder="请输入新密码" />
                                    </div>
                                    <div className="cl-10"></div>
                                    <div className="password-confirm validation">
                                        <input type="password" className="uk-width-1-1 uk-form-input uk-form-input-large" placeholder="请确认新密码" />
                                    </div>
                                    <div className="cl-20"></div>
                                    <div className="uk-width-1-1 pl-100">
                                        <button className="uk-button uk-button-primary uk-width-1-1 uk-button-large" type="button" id="password-confirm">确定</button>
                                    </div>

                                    <div className="cl-36"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>

        )
    }
}

Login.propTypes = {
    status: PropTypes.bool,
};

function mapStateToProps(state) {
    return {
        status: state.modalStatus.loginModal
    }
}

export default connect(mapStateToProps)(Login)


