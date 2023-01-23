import { useState } from 'react';

const CostForm = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [inputDate, setInputDate] = useState('');

  const nameChangeHandler = (event) => setInputName(event.target.value);
  const priceChangeHandler = (event) => setInputPrice(event.target.value);
  const dateChangeHandler = (event) => setInputDate(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      name: inputName,
      price: inputPrice,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costData);

    setInputName('');
    setInputPrice('');
    setInputDate('');
  }

  return (
    <form  onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input
            type="text"
            value={inputName}
            onChange={nameChangeHandler}
          />
        </div>

        <div className="new-cost__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputPrice}
            onChange={priceChangeHandler}
          />
        </div>

        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            value={inputDate}
            onChange={dateChangeHandler} />
        </div>
  
        <div className="new-cost__actions">
          <button type="submit">New Expense</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;