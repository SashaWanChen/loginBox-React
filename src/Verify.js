import styles from "./App.css";
import CSSModules from 'react-css-modules';
import PropTypes from "prop-types";
import React from 'react';

class Verify extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false,
      formValid: false,
    }
  }

  handleUserInput = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
    let newState; 
    name==='email'?newState = {pass: this.props.formErrors.email}:newState = { pass: this.props.formErrors.password};
    this.props.inputHandler(newState);

  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.props.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
     
    if(fieldName==='email'){
      const error =  {formErrors: fieldValidationErrors};
      this.props.callback(error);
      this.setState({formErrors: fieldValidationErrors, emailValid: emailValid}, this.validateForm);
    }else{
      const error =  {formErrors: fieldValidationErrors};
      this.props.callback(error);
      this.setState({formErrors: fieldValidationErrors, passwordValid: passwordValid}, this.validateForm);
    }
    
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  render(){
      const text =[ this.props.process === false? "email" : "password" ];
      const text2 =[ this.props.process === false? "Enter your email" : "Enter your password" ];
    return(
 
          <input type={text} name={text} id="" className={styles[`uiPasswordInput_${this.props.state}`]} onChange={this.handleUserInput} placeholder={text2} value={this.state[`${text}`]}/>      

      );
  }
}

Verify.propTypes = {
  process: PropTypes.bool,
  state: PropTypes.string,
  inputHandler: PropTypes.func,
  formErrors: PropTypes.object,
};
export default CSSModules(Verify, styles);