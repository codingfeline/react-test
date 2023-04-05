import { render, screen } from '../../test-utils'
import { MuiMmode } from './mui-mode'

describe('MuiMode', () => {
  test('renders text correctly', () => {
    render(<MuiMmode />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('dark mode')
  })
})
