import React from 'react'

function Button({children, disabled}) {
  return <button disabled={disabled} className='d_btn'>{children}</button>
}

export default Button