import React, { useState } from "react";
import Button from "../../UI/Button/Button";
//import "./CourseInput.css";
import styled from "styled-components";

const FormController = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red " : "black")};
  }
  &.invalid label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: rgb(255, 0, 0);
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red " : "#ccc")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background-color: ${(props) => (props.invalid ? "red" : "tranparent")};
  }

  // &.invalid input {
  //   display: block;
  //   width: 100%;
  //   border: 1px solid rgb(254, 0, 0);
  //   font: inherit;
  //   line-height: 1.5rem;
  //   padding: 0 0.25rem;
  //   background-color: rgb(226, 186, 186);
  }
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
  &.invalid input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #e80808;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length >= 0) setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormController invalid={!isValid && "invalid"}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormController>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
