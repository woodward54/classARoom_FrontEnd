import React from 'react';
import CreateEntityField from './CreateEntitiyField';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

const ReactDOMServer = require('react-dom/server');
const write = require('write');

const writeFileP = require("write-file-p");

const removeComponent = (setComponents, component, index) => {
  const newComponents = Object.assign([], components);
  newComponents.splice(index, 1);
  //console.log(index);
  //console.log(component);
  setComponents(newComponents);
}

const getHTMLTag = (obj) => {
  switch (obj.type) {
    case "sphere":
      return ( <a-sphere color={`${obj.color}`} radius={`${obj.sphere_radius}`}></a-sphere> )
    case "cylinder":

      return;
    case "box":

      return;
    case "plane":
      return;
    case "cone":
      
      return;
  }
}

const buildARApp = (temp) => {
  var validData = true;

  console.log(temp)

  Object.keys(temp).forEach(element => {

    if (!temp[element].hasOwnProperty('color') || !temp[element].color) {
      temp[element].color = '#F17013';
      console.log('setting color')
    }

    switch (temp[element].type) {
      case "sphere":
        if (!temp[element].hasOwnProperty('sphere_radius') || !temp[element].sphere_radius) {
          alert("Sphere is missing a radius");
          validData = false;
        }
        return;
      case "cylinder":
        if (!temp[element].hasOwnProperty('cylinder_radius') || !temp[element].cylinder_radius
        || !temp[element].hasOwnProperty('cylinder_height') || !temp[element].cylinder_height) {
          alert("Cylinder is missing a property");
          validData = false;
        }
        return;
      case "box":
        if (!temp[element].hasOwnProperty('box_length') || !temp[element].box_length
        || !temp[element].hasOwnProperty('box_height') || !temp[element].box_height
        || !temp[element].hasOwnProperty('box_width') || !temp[element].box_width) {
          alert("Box is missing a property");
          validData = false;
        }
        return;
      case "plane":
        return;
      case "cone":
        if (!temp[element].hasOwnProperty('cone_radius') || !temp[element].cone_radius
        || !temp[element].hasOwnProperty('cone_height') || !temp[element].cone_height) {
          alert("Cone is missing a property");
          validData = false;
        }
        return;
    }
  });

  if (!validData) {
    return;
  }

  // Data is validish, build URL
  Object.keys(temp).forEach(element => {
    var tag = getHTMLTag(temp[element]);
    console.log(tag)
    console.log(ReactDOMServer.renderToStaticMarkup(tag))

    // pickup here, write to file
    const fs = require('fs');

    fs.appendFile('message.txt', 'data to append', function (err) {
      if (err) throw err;
      console.log('Saved!');
    });

  });
}

const App = (props) => {
  return (
    <div className="app">
      <header className="app__header">
        Header
      </header>
      <main className="app__main">
        {Object.keys(props.components).map((key) => {
          //console.log("KEY: ", key);
          return (
            // <div className="component-wrapper" key={key}>
              <CreateEntityField component={props.components[key]} identifier={key} />
            /* </div> */
          )
        })}

        {/* <div>{JSON.stringify(components)}</div> */}
        <div className="Button-success-wrapper">
          <Button variant="outline-success" onClick={() => props.addComponent(Date.now())}>Add</Button>
          <Button variant="outline-info" onClick={() => buildARApp(props.components)}>Build</Button>
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

function newFunction() {
  return 'color';
}
