import React from 'react'
import form_img from "../assets/form_img.svg"

function FormSuccess() {
  return (
    <div className='formSucces'>
        <p>User successfully registered</p>
        <img src={form_img} alt="succes" />
    </div>
  )
}

export default FormSuccess