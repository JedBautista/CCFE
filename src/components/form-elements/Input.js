import React from 'react'

export const Input = (props) => {
  return (
    <label for={`${props.input}-${props.order}`} className='form-input'>
      {props.label && <p className='label'>{props.label.en}</p>}
      <input {...props} placeholder={props.label.en} name={`${props.input}-${props.order}`} className={props.className || 'input'} />
    </label>
  )
}

