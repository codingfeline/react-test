import React from 'react'
import logo from './logo.svg'
import './App.css'
import { AppProviders } from './providers/app-providers'
// import { MuiMmode } from './components/mui/mui-mode'
// import { Skills } from './components/skills/skills'
// import { Application } from './components/application/application'
// const skills = ['HTML', 'CSS', 'JavaScript']
import { BasicProps } from './components/typescripts/basicProps'
import { Oscar } from './components/typescripts/Oscar'
import { Heading } from './components/typescripts/Heading'
import Greet2 from './components/typescripts/greet2'
import { Button } from './components/typescripts/Button'
import PersonList from './components/typescripts/PersonList'
import { Name } from './components/typescripts/Person.types'
import LoggedIn from './components/typescripts/LoggedIn'
function App() {
  const names: Name[] = [
    { first: 'Chloie', last: 'Kendal' },
    { first: 'Bobbie', last: 'Kendal' },
  ]
  return (
    <AppProviders>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        {/* <Skills skills={skills} /> */}
        {/* <Application /> */}
        {/* <MuiMmode /> */}
        <BasicProps status="successful" />
        <Heading>The Heading</Heading>
        <Oscar>
          <Heading>Oscar goes to the Winner!</Heading>
        </Oscar>
        <Greet2 name="Chloie" isLoggedIn={true} messageCount={3} />
        <Greet2 name="Bobbie" isLoggedIn={false} />
        <Button
          handleClick={(event, id) => {
            console.log('Button clicked', event, id)
          }}
        />
        <PersonList names={names} />
        <LoggedIn />
      </div>
    </AppProviders>
  )
}

export default App
