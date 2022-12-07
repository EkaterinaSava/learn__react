import { useState } from 'react';

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

const DEFAULT_AGE = 21;

export default function FormExample() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(DEFAULT_AGE);

  const clearInputs = () => {
    setFirstName('');
    setLastName('');
    setAge(DEFAULT_AGE);
  }

  return (
    <>
      <form className="form-example">
        <FormField
          name="firstName"
          label="First name"
          value={firstName}
          onChange={(newValue) => setFirstName(newValue)}
        />
        <FormField
          name="lastName"
          label="Last name"
          value={lastName}
          onChange={(newValue) => setLastName(newValue)}
        />
        <FormField
          name="age"
          label="Age"
          value={age}
          onChange={(newValue) => setAge(newValue ? parseInt(newValue) : 0)}
          type="number"
        />
      </form>
      <button className="form-example__button" onClick={clearInputs}>Clear all inputs</button>
      <div className="form-example__values">
        <span>First name: {firstName || '-'}</span>
        <span>Last name: {lastName || '-'}</span>
        <span>Age: {age || '-'}</span>
      </div>
    </>
  );
}