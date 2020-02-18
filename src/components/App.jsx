import React from 'react'
import { CreateEntityField } from './CreateEntitiyField'

const removeComponent = (setComponents, component, index) => {
  const newComponents = Object.assign([], components);
  newComponents.splice(index, 1);
  console.log(index);
  console.log(component);
  setComponents(newComponents);
}


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
            <CreateEntityField id={i} />,
            <button id={i} onClick={() => {
              console.log(this.id)
              //delete
              // const newComponents = Object.assign([], components);
              // newComponents.splice(i, 1);
              // setComponents(newComponents);

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