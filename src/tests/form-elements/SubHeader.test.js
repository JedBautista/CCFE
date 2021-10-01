import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { SubHeader } from '../../components/form-elements'

afterEach(cleanup);

describe('<SubHeader />', () => {
  const props = {
    text: {
      en: 'Test sub header!'
    }
  }

  it('Renders with label', () => {
    const co = render(<SubHeader {...props} />) 
    co.getByTestId('sub-header')
    co.getByText('Test sub header!')
  })

  it('Renders with style', () => {
    const co = render(<SubHeader {...props} />) 
    const header = co.getByTestId('sub-header')
    expect(header.classList.contains('sub-text')).toBe(true)
  })
})
