import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Header } from '../../components/form-elements'

afterEach(cleanup);

describe('<Header />', () => {
  const props = {
    text: {
      en: 'Hello my friend!'
    }
  }

  it('Renders with label', () => {
    const co = render(<Header {...props} />) 
    co.getByTestId('header')
    co.getByText('Hello my friend!')
  })

  it('Renders with style', () => {
    const co = render(<Header {...props} />) 
    const header = co.getByTestId('header')
    expect(header.classList.contains('form-header')).toBe(true)
  })
})
