import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {modalOpen} from '../../actions/loginAction'

class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick() {
        this.props.dispatch(modalOpen());
    };
    render() {
        return (
            <nav id="top-menu-holder">
                <div id="top-menu">
                    <a href="/">
                        <div className="logo"></div>
                    </a>
                    <div className="m-menu"></div>
                    <div className="ym-nav" id="nav-menu">
                        <ul className="ym-nav-items">
                            <li className="item"><a href="/product/x1">云马X1</a></li>
                            <li className="item"><a href="/product/c1">云马C1</a></li>
                            <li className="item"><a href="/product/mini">云马mini</a></li>
                            <li className="item lp-2"><a href="/product/app">应用下载</a></li>
                            <li className="item lp-2 active"><a href="./store.html#/">在线商城</a></li>
                            <li className="item"><a href="http://bbs.uma.com">社区论坛</a></li>
                            <li className="item"><a href="/service/network">服务网点</a></li>
                        </ul>
                    </div>
                    <div className="user-holder">
                        <div className="login-info">
                            <button className="login-button" id="wx-login" onClick={this.handleClick} >登录</button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default connect()(Header)


