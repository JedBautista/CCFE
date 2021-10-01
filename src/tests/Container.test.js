import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Container, Button } from '../components'

afterEach(cleanup);

describe('<Container />', () => {

  it('Renders with children', () => {
    const co = render(
      <Container label='Submit'>
        <Button />
      </Container>
    ) 
    co.getByTestId('container')
    co.getByTestId('button')
  })

  it('Renders with style', () => {
    const co = render(<Container styles='form-container' />) 
    const container = co.getByTestId('container')
    expect(container.classList.contains('form-container')).toBe(true)
  })
})
