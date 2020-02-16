import React from 'react'
import Select from 'react-select'

export const CreateEntityField = ({ onChange }) => {

  const [state, setState] = React.useState({});

  const options = [
    { value: 'sphere', label: 'Sphere' },
    { value: 'circle', label: 'Circle' },
    { value: 'box', label: 'Box' },
    { value: 'plane', label: 'Plane' },
    { value: 'sky', label: 'Sky' },
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
            value={state.type}
            onChange={value => updateState({ type: value.value })}
            options={options}
          />
        </div>


      </div>
      {state.type === 'sphere' && <div className="create-entity-field__editor">
        <textarea className="create-entity-field__editor-textarea" onChange={(event) => updateState({ radius: event.target.value })}></textarea>
      </div>}

      {state.type === 'circle' && <div className=""> here

      </div>}

      {state.type === 'box' && <div className="create-entity-field__editor">
        <textarea className="create-entity-field__editor-textarea"></textarea>
      </div>}

      {/* <div className="create-entity-field__editor">
        <textarea className="create-entity-field__editor-textarea"></textarea>
      </div> */}
    </div>
  )
}

