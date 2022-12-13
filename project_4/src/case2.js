import { useState } from 'react';

function useMergedState(initialState) {
  const [state, setState] = useState(initialState);

  const mergeState = (changes) => {
    setState(prevState => {
      return {
        ...prevState,
        ...changes,
      };
    });
  };

  return [state, mergeState];
}

function FormField(props) {
  const { name, label, value, onChange, type = 'text'} = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

const initialState = {
  firstName: '',
  lastName: '',
  age: 21,
};

export function FormExample() {
  const [data, setData] = useMergedState(initialState);

  const clearInputs = () => setData(initialState);

  return (
    <>
      <form className="form-example">
        <FormField
          name="firstName"
          label="First name"
          value={data.firstName}
          onChange={(firstName) => setData({ firstName })}
        />
        <FormField
          name="lastName"
          label="Last name"
          value={data.lastName}
          onChange={(lastName) => setData({ lastName })}
        />
        <FormField
          name="age"
          label="Age"
          value={data.age}
          onChange={(age) => setData({ age: age ? parseInt(age) : '' })}
          type="number"
        />
      </form>
      <button className="form-example__button" onClick={clearInputs}>Clear all inputs</button>
      <div className="form-example__values">
        <span>First name: {data.firstName || '-'}</span>
        <span>Last name: {data.lastName || '-'}</span>
        <span>Age: {data.age || '-'}</span>
      </div>
    </>
  );
}