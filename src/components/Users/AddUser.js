import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState(0);

  const userNameChangedHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName, enteredAge);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={userNameChangedHandler}
        />
        <label htmlFor="age">Age (years)</label>
        <input type="number" name="age" id="age" onChange={ageChangedHandler} />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
