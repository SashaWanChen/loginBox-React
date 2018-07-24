
import React from 'react';
import styles from './FormErrors.css';
 
export const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <span key={i} className={styles.formErrors}>{fieldName} {formErrors[fieldName]}</span>
        )        
      } else {
        return '';
      }
    })}
  </div>


