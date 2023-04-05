import { logRoles, render, screen } from '@testing-library/react'
import { Skills } from './skills'

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript']
  const renderSkills = () => render(<Skills skills={skills} />)

  test('renders correctly', () => {
    renderSkills()
    const el = screen.getByRole('list')
    expect(el).toBeInTheDocument()
  })

  test('renders a list of skills', () => {
    renderSkills()
    expect(screen.getAllByRole('listitem')).toHaveLength(skills.length)
  })

  test('renders Login button', () => {
    renderSkills()
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
  })
  test('renders Learning button is not rendered', () => {
    renderSkills()
    expect(
      screen.queryByRole('button', { name: 'Start learning' })
    ).not.toBeInTheDocument()
  })

  test('Start learning button is eventually displayed', async () => {
    // logRoles(renderSkills().container)
    renderSkills()
    // screen.debug()
    const el = await screen.findByRole(
      'button',
      { name: 'Start learning' },
      { timeout: 2000 } // default is 1000
    )
    // screen.debug()
    expect(el).toBeInTheDocument()
  })
})
