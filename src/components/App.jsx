import React from 'react';
import CreateEntityField from './CreateEntitiyField';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

const removeComponent = (setComponents, component, index) => {
  const newComponents = Object.assign([], components);
  newComponents.splice(index, 1);
  console.log(index);
  console.log(component);
  setComponents(newComponents);
}


const App = (props) => {
  return (
    <div className="app">
      <header className="app__header">
        Header
      </header>
      <main className="app__main">
        {Object.keys(props.components).map((key) => {
          console.log("KEY: ", key);
          return (
            <div className="component-wrapper" key={key}>
              <CreateEntityField component={props.components[key]} identifier={key} />
            </div>
          )
        })}

        {/* <div>{JSON.stringify(components)}</div> */}
        <div className="Button-success-wrapper">
          <Button variant="outline-success" onClick={() => props.addComponent(Date.now())}>Add</Button>
        </div>

      </main>
      <footer className="app__footer"></footer>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    components: state.components,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addComponent: (key) => dispatch({
      type: "ADD_COMPONENT",
      payload: { key },
    })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);