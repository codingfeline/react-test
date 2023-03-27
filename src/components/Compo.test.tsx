import React from 'react'
import { render, screen } from '@testing-library/react'
import Compo from './Compo'

test('renders learn react link', () => {
  render(<Compo />)
  const linkElement = screen.getByText(/welcome to testing/i)
  expect(linkElement).toBeInTheDocument()
})
