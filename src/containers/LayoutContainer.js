import 'styles/App.css';
import React, { Component, PropTypes } from 'react'
import LeftBar from '../components/LeftBar';
import TopBar from '../components/TopBar';

class Layout extends Component { 
    constructor(props, context) {
        super(props, context);
    };
    render() {
        return (
            <div>
                <LeftBar />
                <TopBar />

                {this.props.children}
            </div>
        )
    }
}

export default Layout
