import 'styles/App.scss';
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { barValue } from '../actions/actions';
class Admin extends Component {
  constructor(props, context) {
    super(props, context);
    this.props.dispatch(barValue(-1));
  };
  render() {
    return (
      <div className="holder">
        111
      </div> 
    )
  }
}

Admin.propTypes = {
  value: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    value: state.changeValue
  }
}

export default connect(mapStateToProps)(Admin)
