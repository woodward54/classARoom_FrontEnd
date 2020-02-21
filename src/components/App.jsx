import React from 'react';
import CreateEntityField from './CreateEntitiyField';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
//import fs from 'fs';

const ReactDOMServer = require('react-dom/server');

//const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    //accessKeyId: process.env.AWS_ACCESS_KEY, 
    //secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    // Remove keys on git push
    accessKeyId: '',
    secretAccessKey: '',
    region: 'us-east-2'
});

//var fs = require('fs');
var fs = require('browserify-fs');
//const write = require('write');

const removeComponent = (setComponents, component, index) => {
  const newComponents = Object.assign([], components);
  newComponents.splice(index, 1);
  //console.log(index);
  //console.log(component);
  setComponents(newComponents);
}

const uploadFile = (uploadString) => {
  //console.log(uploadString)
  //console.log(s3)
  const params = {
      Bucket: 'classaroom', // pass your bucket name
      Key: 'team1.html', // file will be saved as classaroom/team1.txt
      Body: uploadString
  };
  s3.upload(params, function(s3Err, data) {
      if (s3Err) { alert("Upload failed... see console log"); throw s3Err; };
      console.log(`File uploaded successfully at ${data.Location}`)
  });
};

const getHTMLTag = (obj) => {
  switch (obj.type) {
    case "sphere":
      return ( <a-sphere color={`${obj.color}`} radius={`${obj.sphere_radius}`}></a-sphere> );
    case "cylinder":
      return ( <a-cylinder color={`${obj.color}`} height={`${obj.cylinder_height}`} radius={`${obj.cylinder_radius}`}></a-cylinder> );
    case "box":
       return ( <a-box color={`${obj.color}`} depth={`${obj.box_length}`} height={`${obj.box_height}`} width={`${obj.box_width}`}></a-box> );
    case "plane":
      // NEEDS LOGIC HERE
      return;
    case "cone":
      return ( <a-cone color={`${obj.color}`} height={`${obj.cone_height}`} radius-bottom={`${obj.cone_radius}`}></a-cone> );
  }
}

const buildARApp = (temp) => {
  var validData = true;

  // Loop through each component, check all inputs are valid

  Object.keys(temp).forEach(element => {

    if (!temp[element].hasOwnProperty('color') || !temp[element].color) {
      temp[element].color = "#F17013";
      console.log('Setting default color')
    }

    switch (temp[element].type) {
      case "sphere":
        if (!temp[element].hasOwnProperty('sphere_radius') || !temp[element].sphere_radius || temp[element].sphere_radius<=0) {
          alert("Invalid sphere");
          validData = false;
        }
        return;
      case "cylinder":
        if (!temp[element].hasOwnProperty('cylinder_radius') || !temp[element].cylinder_radius
        || !temp[element].hasOwnProperty('cylinder_height') || !temp[element].cylinder_height
        || temp[element].cylinder_height<=0 || temp[element].cylinder_radius<=0) {
          alert("Invalid cylinder");
          validData = false;
        }
        return;
      case "box":
        if (!temp[element].hasOwnProperty('box_length') || !temp[element].box_length
        || !temp[element].hasOwnProperty('box_height') || !temp[element].box_height
        || !temp[element].hasOwnProperty('box_width') || !temp[element].box_width
        || temp[element].box_length<=0 || temp[element].box_height<=0 || temp[element].box_width<=0) {
          alert("Invalid box");
          validData = false;
        }
        return;
      case "plane":
        // NEEDS LOGIC HERE
        return;
      case "cone":
        if (!temp[element].hasOwnProperty('cone_radius') || !temp[element].cone_radius
        || !temp[element].hasOwnProperty('cone_height') || !temp[element].cone_height
        || temp[element].cone_radius<=0 || temp[element].cone_height<=0) {
          alert("Invalid cone");
          validData = false;
        }
        return;
    }
  });

  if (!validData) {
    return;
  }

  // Data is validish, upload to S3 bucket 
  var buildString = '';
  console.log(temp)

  Object.keys(temp).forEach(element => {
    var tag = ReactDOMServer.renderToStaticMarkup(getHTMLTag(temp[element]));
    
    console.log(temp[element])
    if (temp[element].text_area) {
      tag = tag.replace(/></g, ' ' + temp[element].text_area + '><')
    }
    console.log(tag)
    buildString += tag;
    buildString += '\n';
  });

  //buildString += "<a-marker-camera preset='kanji'></a-marker-camera>\n";
  console.log(buildString)

  //process.cwd()
  uploadFile(buildString)
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
            <div className="component-wrapper" key={key}>
              <CreateEntityField component={props.components[key]} identifier={key} />
            </div>
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
