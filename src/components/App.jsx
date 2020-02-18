import React from 'react'
import { CreateEntityField } from './CreateEntitiyField'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <div className="component-wrapper">
              <CreateEntityField key={`create_${i}`} id={i} />
              <div className="Button-danger-wrapper">
                <Button variant="outline-danger" key={`delete_button_${i}`} id={i} onClick={() => {
                  console.log(i)
                  console.log(components)
                  //delete
                  const newComponents = Object.assign([], components);
                  newComponents.splice(i, 1);
                  setComponents(newComponents);

                }}>X</Button>
              </div>
            </div>
            
          ]
          })}

          {/* <div>{JSON.stringify(components)}</div> */}
        <div className="Button-success-wrapper">
          <Button variant="outline-success" onClick={() => setComponents([...components, {}])}>Add</Button>
        </div>
        
      </main>
      <footer className="app__footer"></footer>
    </div>
  )
}