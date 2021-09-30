import React from 'react'
import { Header } from './Header'
import { Input } from './Input'
import { Paragraph } from './Paragraph'

export const Elements = (props) => {
  
  switch(props.type) {
    case 'header': 
      return <Header {...props} />
    case 'field':
      return <Input {...props} />
    case 'paragraph':
      return <Paragraph {...props} />
    default:
      return null
  }
}
