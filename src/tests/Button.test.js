import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Button } from '../components'

afterEach(cleanup);

describe('<Button />', () => {

  it('Renders with label', () => {
    const co = render(<Button label='Submit' />) 
    co.getByTestId('button')
    co.getByText('Submit')
  })

  it('Renders with style', () => {
    const co = render(<Button label='Submit' styles='-primary' />) 
    const button = co.getByTestId('button')
    expect(button.classList.contains('-primary')).toBe(true)
  })
})
