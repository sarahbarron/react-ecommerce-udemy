import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  // otherProps are from the input on the SignIn form
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {
      //  if a label is passed as a prop add the label otherwise null
      label ? (
        // if there is a vlaue apply the  shrink class
        // otherwise it will be an empty string
        // this is needed for browsers that will auto complete
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null
    }
  </div>
);

export default FormInput;
