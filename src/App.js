import React, { Component } from 'react';
import styles from "./App.css";
import CSSModules from 'react-css-modules';
import { FormErrors } from './FormErrors.js';
import Verify from './Verify';
import BtnComp from './BtnComp';


class App extends Component {
    constructor (props) {
    super(props);
    this.state = {
      formErrors: {email: '', password: ''},
      show: 'idle',
      emailFinished:false,
      pass:'',
    }
  }
   
  handleUserInput= (newState) => {
    this.setState({...newState});

  }
  handleCallback= (newState) =>{
    this.setState({...newState});
  }

  render() {
      const text =[ this.state.emailFinished === false? "email" : "password" ];
  
    return (

<html>
<body>
<form id="app" className={styles.uiModal}>
  <div className={styles[`uiIcon_${this.state.show}`]}>
    <div className={styles.uiLock}></div>
  </div>

  <div className={styles.uiTitle}>This link is password-protected</div>

  <div className={styles.uiSubtitle}>
    {this.state.show==='success'?'':(this.state.show!=='error'? <span >Please enter the {text}.</span>:<span className={styles.uiError}> <FormErrors formErrors={this.state.formErrors} /></span>)}
  </div>

      <div className={styles[`inputContainer_${this.state.show}`]}>   
          <Verify state = {this.state.show} process = {this.state.emailFinished} formErrors={this.state.formErrors} inputHandler={this.handleUserInput} callback={this.handleCallback}/>
           <div className={styles[`bottomLine_${this.state.show}`]}></div>
      </div> 
 
  <BtnComp state = {this.state.show} process = {this.state.emailFinished} clickHandler={this.handleCallback} pass={this.state.pass}/>

  <button className={styles.uiReset} type="button" title="Reset" onClick ={this.handleCallback}></button>
</form>
</body>
</html>




    );
  }
}

export default CSSModules(App, styles);
