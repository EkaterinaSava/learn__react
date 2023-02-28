import { useState, useRef } from 'react';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';

import styles from './CreateUser.module.css';

const CreateUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const createUserHandler = (event) => {
    event.preventDefault();

    const inputUserName = nameInputRef.current.value;
    const inputUserAge = ageInputRef.current.value;

    if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
      setError({
        title: 'Incorrect value',
        message: 'These fields cannot be empty'
      });
      return;
    }

    if (+inputUserAge <= 0) {
      setError({
        title: 'Incorrect age',
        message: 'Age must be greater than zero'
      });
      return;
    }

    props.onCreateUser(inputUserName, inputUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => setError(false);

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={errorHandler}
        />
      )}
      <Card>
        <form className={styles.form} onSubmit={createUserHandler}>
          <div className={styles.input}>
            <label htmlFor="name">Name</label>
            <input
              placeholder="Enter user name"
              id="name"
              type="text"
              ref={nameInputRef}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="age">Age</label>
            <input
              placeholder="Enter user age"
              id="age"
              type="number"
              ref={ageInputRef}
            />
          </div>
          <Button type="submit">Add new user</Button>
        </form>
      </Card>
    </>
  );
};

export default CreateUser;