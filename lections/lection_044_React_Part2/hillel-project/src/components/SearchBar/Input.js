import { useState, useRef } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const { onUpdate, onValidate, title = "", ...cpProps } = props;
  const [error, setError] = useState("");
  const inputRef = useRef(null); // { current: null}

  const onUpdateHandler = (event) => {
    // const value = event.target.value;
    const value = inputRef.current.value;
    // console.log(inputRef, "inputRef");

    // console.log(value, "value");
    const validationResult = onValidate(value);

    if (typeof validationResult === "string") {
      inputRef.current.focus();
      setError(validationResult);
    } else {
      setError("");
    }

    onUpdate(value);
  };

  const onFocusHandler = () => {
    setError("");
  };

  return (
    <label className={classes.inputField}>
      {title}
      <input
        ref={inputRef}
        // onBlur={onUpdateHandler}
        onChange={onUpdateHandler}

        // onFocus={onFocusHandler}
        {...cpProps}
      />
      {error && <div className={classes.error}>{error}</div>}
    </label>
  );
};

export default Input;
