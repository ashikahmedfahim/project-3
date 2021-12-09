import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [hasError, setHasError] = useState(false);

  const userNameChangedHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setHasError(true);
      return;
    }
    if (+enteredAge < 1) {
      setHasError(true);
      return;
    }
    setHasError(false);
    props.onAddUser({
      name: enteredUserName,
      age: +enteredAge,
      key: Math.random().toString(),
    });
    setEnteredAge("");
    setEnteredUserName("");
  };

  return (
    <>
      {hasError && (
        <ErrorModal
          title="An error has occurred"
          message={"Please enter valid values"}
          onClose={() => setHasError(false)}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={enteredUserName}
            onChange={userNameChangedHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            name="age"
            id="age"
            value={enteredAge}
            onChange={ageChangedHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
