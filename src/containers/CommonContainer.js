import 'styles/App.css';
import React, { Component, PropTypes } from 'react'
import Header from '../components/common/Header';
import LoginHolder from '../components/common/LoginHolder';
import Modal from '../components/common/Modal';
import Banner from '../components/Banner';
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
                <Header />

                <LoginHolder />

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
