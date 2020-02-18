import React from 'react'
import Select from 'react-select'

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

  // pickup here - add all colors in one dropdown
  const colors = [
    { value: 'red', label: 'Sphere' },
    { value: 'cylinder', label: 'Cylinder' },
    { value: 'box', label: 'Box' },
    { value: 'plane', label: 'Plane' },
    { value: 'cone', label: 'Cone' },
  ]

  const updateState = (s) => {
    const newState = {
      ...state,
      ...s,
    };
    setState(newState);
    onChange(newState);
  }

  return (
    <div className="create-entity-field">
      <div className="create-entity-field__type">

        {/* <div>{JSON.stringify(state)}</div> */}

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

