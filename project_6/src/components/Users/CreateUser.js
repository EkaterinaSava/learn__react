import { useState } from 'react';
import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from './CreateUser.module.css';

const CreateUser = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');

  const createUserHandler = (event) => {
    event.preventDefault();
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      return;
    }

    if (+inputAge <= 0) {
      return;
    }

    console.log('inputName:', inputName, 'inputAge:', inputAge);

    setInputName('');
    setInputAge('');
  };

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={createUserHandler}>
        <div className={styles.input}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={inputName}
            onChange={nameChangeHandler}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={inputAge}
            onChange={ageChangeHandler}
          />
        </div>
        <Button type="submit">Add new user</Button>
      </form>
    </Card>
  );
};

export default CreateUser;