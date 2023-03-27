/*
3 phases of TDD test:
write test
writing code
refactor
*/

import { render, screen } from '@testing-library/react'
import Greet from './greet'

// describe.only, describe.skip
describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
  })

  // test.only, test.skip
  test('renders with a  name', () => {
    render(<Greet name="Chloie" />)
    const textElement = screen.getByText('Hello Chloie')
    expect(textElement).toBeInTheDocument()
  })
})
