import React, { useEffect, useState } from 'react';

function Input({ label, error, ...props }) {
  const [value, setValue] = useState('');
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    setInvalid(value.trim() === '');
  }, [value, error]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`customInput ${invalid ? 'has-error' : ''}`}>
      <input
        value={value}
        onChange={handleChange}
        style={{ borderColor: invalid ? '' : '' }}
        className={error ? 'c-input-error' : ''}
        {...props}
        placeholder=" "
      />
      <label>{label}</label>
      {error && <p className="customInput-helper">Invalid data</p>}
    </div>
  );
}

export default Input;
