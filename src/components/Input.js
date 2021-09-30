import React from 'react'

export const Input = (props) => {
  return (
    <label htmlFor={`${props.input}-${props.order}`} className='form-input'>
      {props.label && <p className='label'>{props.label.en}</p>}
      <input {...props} name={`${props.input}-${props.order}`} className={props.className || 'input'} />
    </label>
  )
}

