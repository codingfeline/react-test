import { render, screen } from '@testing-library/react'
import { Application } from './application'

const renderApp = () => render(<Application />)
describe('Application', () => {
  test('renders pageheading', () => {
    renderApp()
    const pageheading = screen.getByRole('heading', {
      // name: 'Job application form' is the innerHTML of h1
      level: 1, // refers to h1
    })
    expect(pageheading).toBeInTheDocument()
  })
  test('renders sectionheading', () => {
    renderApp()
    const myElement = screen.getByRole('heading', {
      name: 'Section 1',
    })
    expect(myElement).toBeInTheDocument()
  })

  test('renders correctly with textbox (2x)', () => {
    renderApp()
    const nameElement = screen.getByRole('textbox', {
      name: 'Name', // refers to its htmlFor attribute
    })
    expect(nameElement).toBeInTheDocument()
    const nameElement2 = screen.getByRole('textbox', {
      name: 'Bio',
    })
    expect(nameElement2).toBeInTheDocument()
  })
  test('renders correctly with combo', () => {
    renderApp()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('renders with checkbox', () => {
    renderApp()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('renders with button', () => {
    renderApp()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders with terms', () => {
    renderApp()
    expect(
      screen.getByLabelText('I agree to the terms and conditions')
    ).toBeInTheDocument()
  })

  it('renders with combo by name', () => {
    renderApp()
    expect(
      screen.getByLabelText('Name', {
        selector: 'input',
      })
    ).toBeInTheDocument()
  })

  it('renders with placeholder', () => {
    renderApp()
    expect(screen.getByPlaceholderText('Fullname')).toBeInTheDocument()
  })

  it('renders with paragraph text', () => {
    renderApp()
    expect(screen.getByText('All fields are mandatory')).toBeInTheDocument()
  })

  it('renders with test id', () => {
    renderApp()
    const el = screen.getByTestId('custom-element')
    expect(el).toBeInTheDocument()
  })

  // screen.getAllByDisplayValue
})
