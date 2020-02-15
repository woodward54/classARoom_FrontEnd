import React from 'react'
import { CreateEntityField } from './CreateEntitiyField'

export const App = (props) => {

  const message = "asdfasdf"

  return (
    <div className="app">
      <header className="app__header">
        {props.name}
      </header>
      <main className="app__main">
        <CreateEntityField />
      </main>
      <footer className="app__footer"></footer>
    </div>
  )
}