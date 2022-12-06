import { useState } from 'react';

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="row">
      <div className="input-field">
        <input
          placeholder="Search"
          type="search"
          className="search-input validate"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="btn"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export { Search };