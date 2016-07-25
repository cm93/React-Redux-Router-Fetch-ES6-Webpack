import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {modalClose} from '../../actions/loginAction'

export default class Modal extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick(e) {
        this.props.dispatch(modalClose());

        e.preventDefault();
        e.stopPropagation();
    };
    render() {
        return (
            <div className="modal-wrap" onClick={(e) => this.handleClick(e)} style={{display: this.props.status ? 'block' : 'none'}}></div>
        )
    }
}

Modal.propTypes = {
    status: PropTypes.bool,
};

function mapStateToProps(state) {
    return {
        status: state.modalStatus.holder
    }
}

export default connect(mapStateToProps)(Modal)

