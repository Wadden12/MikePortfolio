import React, { useState } from "react";
import classes from "./contactForm.module.css";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");

  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [phoneIsTouched, setPhoneIsTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const nameInputIsInvalid = !nameIsValid && nameIsTouched;
  const emailIsValid = email.trim() !== "";
  const emailInputIsInvalid = !emailIsValid && emailIsTouched;
  const phoneIsValid = phone.trim() !== "";
  const phoneInputIsInvalid = !phoneIsValid && phoneIsTouched;

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const inquiryChangeHandler = (e) => {
    setInquiry(e.target.value);
  };

  const nameOnBlurHandler = (e) => {
    setNameIsTouched(true);
  };
  const emailOnBlurHandler = (e) => {
    setEmailIsTouched(true);
  };
  const phoneOnBlurHandler = (e) => {
    setPhoneIsTouched(true);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setNameIsTouched(true);
    setEmailIsTouched(true);
    setPhoneIsTouched(true);
    if (!nameIsValid & !phoneIsValid & !emailIsValid) {
      return;
    }

    setName("");
    setEmail("");
    setPhone("");
    setNameIsTouched(false);
    setPhoneIsTouched(false);
    setEmailIsTouched(false);
  };

  const nameInputClasses = !nameInputIsInvalid
    ? `${classes.control}`
    : `${classes.control} ${classes.invalid}`;
  const emailInputClasses = !emailInputIsInvalid
    ? `${classes.control}`
    : `${classes.control} ${classes.invalid}`;
  const phoneInputClasses = !phoneInputIsInvalid
    ? `${classes.control}`
    : `${classes.control} ${classes.invalid}`;

  return (
    <section className={classes.contact}>
      <form onSubmit={onSubmit}>
        <div>
          <div className={nameInputClasses}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder={!nameIsTouched ? "Mike Wadden" : ""}
              onChange={nameChangeHandler}
              onBlur={nameOnBlurHandler}
              value={name}
            ></input>
            {nameInputIsInvalid && (
              <p className={classes["error-text"]}>Name must not be empty</p>
            )}
          </div>
          <div className={emailInputClasses}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder={!emailIsTouched ? "mike.wadden@keyin.com" : ""}
              onChange={emailChangeHandler}
              onBlur={emailOnBlurHandler}
              value={email}
            ></input>
            {emailInputIsInvalid && (
              <p className={classes["error-text"]}>Email must not be empty</p>
            )}
          </div>
          <div className={phoneInputClasses}>
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder={!phoneIsTouched ? "709-687-5085" : ""}
              onChange={phoneChangeHandler}
              onBlur={phoneOnBlurHandler}
              value={phone}
            ></input>
            {phoneInputIsInvalid && (
              <p className={classes["error-text"]}>Phone must not be empty</p>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="inquiry" onChange={inquiryChangeHandler}>
              Subject of Inquiry
            </label>
            <textarea
              rows="4"
              id="inquiry"
              placeholder="My contact info is above or fill out the blocks and leave a message. I look forward to hearing from you"
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Leave a Message</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
