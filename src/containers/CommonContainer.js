import 'styles/App.css';
import React, { Component, PropTypes } from 'react'
import Header from '../components/common/Header';
import Login from '../components/common/Login';
import Modal from '../components/common/Modal';
import FormInput from '../components/FormInput';
import {connect} from 'react-redux'
require('../styles/yz-uikit.min.css');
require('../styles/style.scss');

class Common extends Component {
    constructor(props, context) {
        super(props, context);
    };
    render() {
        return (
            <div>
                <FormInput required={true} placeholder="请输入邮箱" errorText="邮箱格式有问题" type='email' />

                <Header />

                <Login />

                <Modal />

                {this.props.children}
            </div>
        )
    }
}

Common.propTypes = {
    status: PropTypes.object,
};

function mapStateToProps(state) {
    return {
        status: state.modalStatus
    }
}

export default connect(mapStateToProps)(Common)
