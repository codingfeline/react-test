import { render, screen, act } from '@testing-library/react'
import user from '@testing-library/user-event'
import { Counter } from './counter'

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />)
    const countEl = screen.getByRole('heading')
    expect(countEl).toBeInTheDocument()
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    expect(incrementButton).toBeInTheDocument()
  })

  test('renders a count of 0', () => {
    render(<Counter />)
    const countEl = screen.getByRole('heading')
    expect(countEl).toHaveTextContent('0')
  })

  test('renders a count of 1 after clicking the increment button', async () => {
    user.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    // below is wrapped in act
    // https://stackoverflow.com/questions/56722139/when-testing-code-that-causes-react-state-updates-should-be-wrapped-into-act
    await act(async () => user.click(incrementButton))
    const countEl = screen.getByRole('heading')
    expect(countEl).toHaveTextContent('1')
  })

  test('renders a count of 10 after clicking the set abutton', async () => {
    user.setup()
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    await act(async () => user.type(amountInput, '10'))
    expect(amountInput).toHaveValue(10)
    const setButton = screen.getByRole('button', {
      name: 'Set',
    })
    await act(async () => user.click(setButton))
    const countEl = screen.getByRole('heading')
    expect(countEl).toHaveTextContent('10')
  })

  test('elements are focused in the right order', async () => {
    user.setup()
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', { name: 'Set' })
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    await user.tab()
    expect(incrementButton).toHaveFocus()
    await user.tab()
    expect(amountInput).toHaveFocus()
    await user.tab()
    expect(setButton).toHaveFocus()
  })
})
