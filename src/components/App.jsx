import React from 'react'
import { CreateEntityField } from './CreateEntitiyField'

export const App = (props) => {

  const message = "asdfasdf";
  const [components, setComponents] = React.useState([]);

  return (
    <div className="app">
      <header className="app__header">
        {props.name}
      </header>
      <main className="app__main">
        {components.map((component, i) => {
          return [
            <CreateEntityField onChange={state => {
              const newComponents = Object.assign([], components);
              newComponents.splice(i, 1, state);
              setComponents(newComponents);
            }} />,
            <button onClick={() => {
              const newComponents = Object.assign([], components);
              newComponents.splice(i, 1);
              setComponents(newComponents)
            }}>X</button>
          ]
          })}
          <div>{JSON.stringify(components)}</div>
        <button onClick={() => setComponents([...components, {}])}>Add</button>
      </main>
      <footer className="app__footer"></footer>
    </div>
  )
}