/*
3 phases of TDD test:
write test
writing code
refactor

test files with -test and -spec suffix
also files in __tests__ folder
*/

import { render, screen } from '@testing-library/react'
import Greet from './greet'

// describe.only, describe.skip
describe('Greet', () => {
  // fit == test.only, xit == test.skip
  it('renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
  })
})

// test.only, test.skip
// describe('Nested', () => {
//   test('renders with a name', () => {
//     render(<Greet name="Chloie" />)
//     const textElement = screen.getByText('Hello Chloie')
//     expect(textElement).toBeInTheDocument()
//   })
// })
