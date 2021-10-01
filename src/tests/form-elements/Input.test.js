import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Input } from '../../components/form-elements'

afterEach(cleanup);

describe('<SubHeader />', () => {
  const props = {
    input: 'text',
    order: 1,
    label: {
      en: 'Test input!'
    }
  }

  it('Renders with label', () => {
    const co = render(<Input {...props} />) 
    co.getByTestId('input')
    co.queryByText('Test input')
  })

  it('Renders with style', () => {
    const co = render(<Input {...props} />) 
    const input = co.getByTestId('input')
    expect(input.classList.contains('form-input')).toBe(true)
  })
})
