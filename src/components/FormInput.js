import React, { Component } from 'react'
import classNames from 'classnames'

class FormInput extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.state = {
            inputError: false,
            errorText: '不能为空'
        };
    }

    handleBlur(e) {
    	let inputValue = e.target.value;
        if (this.props.required) {
            if (inputValue === '' || inputValue === null) {
                this.setState({ inputError: true });
            } else {
            	switch(this.props.type) {
            		case 'text' :
            			this.setState({ inputError: false });
            			break;
            		case 'email':
            			this.emailValid(inputValue);
            			break;
            		case 'phone':
            			this.phoneValid(inputValue);
            			break;
            		default:
            			this.setState({ inputError: false });
            	}
            }
        }
    }

    handleFocus() {
        this.setState({inputError: false })
    }

    emailValid(email) {
    	const reg =  /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    	if(reg.test(email)) {
    		this.setState({inputError: false});
    	}else {
    		this.setState({inputError: true, errorText: this.props.errorText});
    	}
    }
    phoneValid(phone) {
        const reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
    	if(reg.test(phone)) {
    		this.setState({inputError: false });
    	}else {
    		this.setState({inputError: true, errorText: this.props.errorText});
    	}

    }

    render() {
        let inputClass = classNames({
            'form-input': true,
            'form-input-error': this.state.inputError
        });
        let pClass = classNames({
            'form-error-message': true,
            'hide': !this.state.inputError
        });

        return (
            <div className = 'form-input-row' >
		        <input className = { inputClass }
		        defaultValue = ''
		        onFocus = { this.handleFocus }
		        onBlur = { (e) => this.handleBlur(e) }
                placeholder = { this.props.placeholder }  
		        /> 
		        <p className = { pClass } > { this.state.errorText } </p>
            </div>
        )
    }
}

export default FormInput
