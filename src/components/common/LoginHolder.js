import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import Login from './Login'
import Register from './Register'
import {modalClose} from '../../actions/loginAction'

class LoginHolder extends Component {
    constructor(props, context) {
        super(props, context);
        this.handClickRegister = this.handClickRegister.bind(this);
        this.handClickLogin = this.handClickLogin.bind(this);
        this.state = {
            isLoginPart: true
        }
    };
    handClickRegister() {
        this.setState({
            isLoginPart: false
        })
    };
    handClickLogin() {
        this.setState({
            isLoginPart: true
        })
    };
    shouldComponentUpdate(nextProps) {
        if (!nextProps.isGuest && nextProps.status)
        {
            this.props.dispatch(modalClose());
            return false;
        }
        else
        {
            return true;
        }
    }
    render() {
        let child = this.state.isLoginPart ? <Login /> : <Register />;
        let item  = this.props.status ? <div id="login-holder">
            <div className="login-holder" id="login-part">
                <ul className="uk-tab">
                    <li className={this.state.isLoginPart ? "section active" : "section"} onClick={this.handClickLogin}>登录</li>
                    <li className={this.state.isLoginPart ? "section" : "section active"} onClick={this.handClickRegister}>注册</li>
                </ul>
                <ul className="uk-content">
                    {child}
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
        </div> : '';
        return (
            <ReactCSSTransitionGroup component="div" transitionName="fadeIn"  transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                {item}
            </ReactCSSTransitionGroup>

        )
    }
}

LoginHolder.propTypes = {
    status: PropTypes.bool,
    isGuest: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        status: state.modalStatus.loginModal,
        isGuest: !state.loginStatus.loginStatus
    }
}

export default connect(mapStateToProps)(LoginHolder)


