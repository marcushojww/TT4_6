
//Request for loan
import { useState } from "react";
import "./form.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  function handleFocus(e) {
    setFocused(true);
  }

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        className="input"
        {...inputProps}
        onChange={onChange}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;