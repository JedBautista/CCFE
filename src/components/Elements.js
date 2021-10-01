import React from 'react'
import { 
  Header,
  Input,
  Checkbox,
  DatePicker,
  SubHeader
} from './form-elements'

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
      return <SubHeader {...props} />
    default:
      return null
  }
}
