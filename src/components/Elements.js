import React from 'react'
import { Header } from './Header'
import { Input } from './Input'
import { Checkbox } from './Checkbox'
import { DatePicker } from './DatePicker'
import { Paragraph } from './Paragraph'

export const Elements = (props) => {
  
  switch(props.type) {
    case 'header': 
      return <Header {...props} />
    case 'field':
      if (props.input === 'checkbox') {
        return <Checkbox {...props} />
      }

      if (props.input === 'datepicker') {
        return <DatePicker {...props} />
      }

      return <Input {...props} />
    case 'paragraph':
      return <Paragraph {...props} />
    default:
      return null
  }
}
