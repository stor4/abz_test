import React from 'react'

function RadioButton({name, value, checked, onChange, label}) {
  return (
    <label className="custom-radio">
        <span className='custom-radio-name'>{name}</span>
        <input 
            type="radio" 
            name={name} 
            value={value} 
            checked={checked} 
            onChange={onChange} 

        />
        <span className="checkmark"></span>
    </label>
  )
}

export default RadioButton