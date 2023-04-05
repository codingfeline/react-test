import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<null | AuthUser>(null)
  const handleClick = () => {
    setIsLoggedIn(true)
  }
  const handleLogout = () => {
    setIsLoggedIn(false)
  }
  const handleLogin2 = () => {
    setUser({
      name: 'Nazie',
      email: 'naz@domain.uk',
    })
  }

  const handleLogout2 = () => {
    setUser(null)
  }

  return (
    <div>
      <button onClick={handleClick}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
      <button onClick={handleLogin2}>Login</button>
      <button onClick={handleLogout2}>Logout</button>
      <div>
        User is {user?.name} of email {user?.email}
      </div>
    </div>
  )
}

export default LoggedIn
