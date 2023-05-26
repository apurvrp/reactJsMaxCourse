import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [formInputsValueObj, setFormInputsValueObj] = useState({
    name: "",
    nameTouch: false,
    email: "",
    emailTouch: false,
  });
  const [formIsValid, setFormIsValid] = useState(true);
  const getNameValue = formInputsValueObj?.name.trim();
  const getEmailValue = formInputsValueObj?.email.trim();
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const checkEmailRegex = emailRegex.test(getEmailValue);

  console.log("checkEmailRegex", checkEmailRegex);

  const enteredInValueIsValid =
    getNameValue !== "" && getEmailValue !== "" && checkEmailRegex;

  const nameInvalid = getNameValue === "" && formInputsValueObj?.nameTouch;
  const emailInvalid = !checkEmailRegex && formInputsValueObj?.emailTouch;

  useEffect(() => {
    if (enteredInValueIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredInValueIsValid]);

  const inputChangeHandler = (event) => {
    setFormInputsValueObj((state) => ({
      ...state,
      [event.target.name]: event.target.value.trim(),
    }));

    // if (event.target.name === "name") {
    //   const getNameValue = event.target.value;
    //   setFormInputsValueObj((state) => ({
    //     ...state,
    //     name: getNameValue.trim(),
    //   }));
    // }

    // if (event.target.name === "email") {
    //   const getEmailValue = event.target.value;
    //   setFormInputsValueObj((state) => ({
    //     ...state,
    //     email: getEmailValue.trim(),
    //   }));
    // }
  };

  const inputBlurHandler = (event) => {
    if (event.target.name === "name") {
      setFormInputsValueObj((state) => ({
        ...state,
        nameTouch: true,
      }));
    }
    if (event.target.name === "email") {
      setFormInputsValueObj((state) => ({
        ...state,
        emailTouch: true,
      }));
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setFormInputsValueObj((state) => ({
      ...state,
      nameTouch: true,
      emailTouch: true,
    }));
    if (!enteredInValueIsValid) {
      return;
    }
    // console.log(enteredName);
    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setFormInputsValueObj({
      name: "",
      nameTouch: false,
      email: "",
      emailTouch: false,
    });
  };

  const nameInputClasses = nameInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
          value={formInputsValueObj?.name}
        />
        {nameInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
          value={formInputsValueObj?.email}
        />
        {emailInvalid && (
          <p className="error-text">Please enterd valid email ID.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
