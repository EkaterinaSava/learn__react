import { useEffect, useState, useReducer } from 'react';

import styles from './Login.module.css';
import Button from '../UI/Button';

const emailReducer = (prevState, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.value,
      isValid: action.value.includes('@'),
    };
  }

  if (action.type === 'INPUT_BLUR') {
    return {
      value: prevState.value,
      isValid: prevState.value.includes('@'),
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

const passwordReducer = (prevState, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.value,
      isValid: action.value.trim().length > 7,
    };
  }

  if (action.type === 'INPUT_BLUR') {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 7,
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmailState] = useReducer(emailReducer, {
    value: '',
    isValid: undefined,
  });
  const [passwordState, dispatchPasswordState] = useReducer(passwordReducer, {
    value: '',
    isValid: undefined,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    });

    return () => {
      clearTimeout(timer);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmailState({type: 'USER_INPUT', value: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordState({type: 'USER_INPUT', value: event.target.value});
  };

  const validateEmailHandler = () => {
    dispatchEmailState({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPasswordState({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <div className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
          <div className={emailState.isValid === false ? styles['error-show'] : styles['error-hide']}>
            This field cannot be empty
          </div>
        </div>
        <div
          className={`${styles.control} ${
            passwordState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
          <div className={passwordState.isValid === false ? styles['error-show'] : styles['error-hide']}>
            This field cannot be empty
          </div>
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Вход
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;