import React from "react";
import PropTypes from "prop-types";
import styles from "./App.css";

const TIME = 2000;

class BtnComp extends React.Component {
  handleCallback = () => {

  	let newState = {show: 'validating'};

  	this.props.clickHandler(newState);

  	if(this.props.state === 'success'){
      newState = { show:'idle',emailFinished:false,email: '',password: ''};
      this.props.clickHandler(newState);
    }
    else if(this.props.process===false){

      if(this.props.pass===""){
        newState = {emailFinished: true, show: 'idle'};
      }else{
        newState = {show: 'error'};
      }
      setTimeout(  function() { this.props.clickHandler(newState); }.bind(this), TIME);
 
    }else{

      if(this.props.pass===""){
        newState = {show: 'success'};
      }else{
        newState = {show: 'error'};
      }
      setTimeout(  function() { this.props.clickHandler(newState); }.bind(this), TIME);
    }
  };

render() {
  	const text =[ this.props.process === false? "Next" : this.props.state === 'success'? "login success!!!!!" : "Submit"];

return(
  
    <button type = "button" className={styles[`uiSubmit_${this.props.state}`]} onClick ={this.handleCallback} >{text}</button>

    );

  }
}
BtnComp.propTypes = {
  process: PropTypes.bool,
  state: PropTypes.string,
  clickHandler: PropTypes.func,
};
export default BtnComp;