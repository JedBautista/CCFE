import React from 'react'

export const Input = (props) => {
  return (
    <label data-testid='input' htmlFor={`${props.input}-${props.order}`} className='form-input'>
      {props.label && <p className='label'>{props.label.en}</p>}
      <input {...props} placeholder={props.label.en} name={`${props.input}-${props.order}`} className={props.className || 'input'} />
    </label>
  )
}

