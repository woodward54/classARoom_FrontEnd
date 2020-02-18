import React, { Component } from "react";
import Select from 'react-select'
//import { ColorPicker } from './ColorPicker'
import ReactDOM from "react-dom";
import ColorPicker from "react-color-picker-text";
import "./styles.css";


const onChange = (state) => {
  state => {
    const newComponents = Object.assign([], components);
    newComponents.splice(i, 1, state);
    setComponents(newComponents);
  }
}

export const CreateEntityField = () => {

  const [state, setState] = React.useState({});

  const options = [
    { value: 'sphere', label: 'Sphere' },
    { value: 'cylinder', label: 'Cylinder' },
    { value: 'box', label: 'Box' },
    { value: 'plane', label: 'Plane' },
    { value: 'cone', label: 'Cone' },
  ]

  // change the default design of the color picker
  const styles = {
    title: "Color Picker",
    labelStyle: {
      paddingBottom: "7px",
      fontSize: "11px"
    },
    colorTextBoxStyle: {
      height: "35px",
      border: "none",
      borderBottom: "1px solid lightgray",
      paddingLeft: "35px"
    }
  }

  // pickup here - add all colors in one dropdown

  const updateState = (s) => {
    const newState = {
      ...state,
      ...s,
    };
    setState(newState);
    onChange(newState);
  }

  const onColorPickerInfoChange = color => {
    console.log("Main Color Change", color);
  }

  return (
    <div className="create-entity-field">
      <div className="create-entity-field__type">

        {/* <div>{JSON.stringify(state)}</div> */}
        <div className="color-picker-palette">
          <ColorPicker
            onColorChange={this.onColorPickerInfoChange}
            title={styles.title}
            labelStyle={styles.labelStyle}
            colorTextBoxStyle={styles.colorTextBoxStyle}
            pickerType={"Chrome"}
          />
        </div>
        

        <div className="select">
          <Select
            value={state.label}
            onChange={value => updateState({ type: value.value })}
            options={options}
          />
        </div>


      </div>
      {state.type === 'sphere' && <div className="create-entity-field__editor">
        <div className="wrapper-1-param">
          <div className="center-col">Radius:</div> 
          <div className="center-col"><input type="text"/></div>
          {/* <input type="text" value={state.value} onChange= /> */}
        </div>
        {/* <textarea className="create-entity-field__editor-textarea" onChange={(event) => updateState({ radius: event.target.value })}></textarea> */}
      </div>}

      {state.type === 'cylinder' && <div className="create-entity-field__editor">
        <div className="wrapper-1-param">
            <div className="center-col">Radius: </div> 
            <div className="center-col, col2"><input type="text"/></div>

            <div className="center-col, row2">Height: </div>
            <div className="center-col, row2, col2"><input type="text"/></div>

          {/* <input type="text" value={state.value} onChange= /> */}
        </div>
        {/* <textarea className="create-entity-field__editor-textarea" onChange={(event) => updateState({ radius: event.target.value })}></textarea> */}
      </div>}

      {state.type === 'box' && <div className="create-entity-field__editor">
        <div className="wrapper-1-param">
            <div className="center-col">Length: </div> 
            <div className="center-col col2"><input type="text"/></div>

            <div className="center-col, row2">Height: </div>
            <div className="center-col, row2, col2"><input type="text"/></div>

            <div className="center-col, row3">Width: </div>
            <div className="center-col, row3, col2"><input type="text"/></div>

          {/* <input type="text" value={state.value} onChange= /> */}
        </div>
        {/* <textarea className="create-entity-field__editor-textarea" onChange={(event) => updateState({ radius: event.target.value })}></textarea> */}
      </div>}

      <div className="create-entity-field__editor">
        <textarea className="create-entity-field__editor-textarea"></textarea>
      </div>

      
    </div>
  )
}

