import React from 'react'

export const Checkbox = (props) => {
  return (
    <label for={`${props.input}-${props.order}`} className='form-input'>
      {props.label && <p className='label'>{props.label.en}</p>}
      <input {...props} name={`${props.input}-${props.order}`} type='checkbox' className={props.className || 'input'} />
    </label>
  )
}
