import React from 'react'
import Select from 'react-select'

export const CreateEntityField = ({ onChange }) => {

  const [ selectedPirmative, setSelectedPrimative ] = React.useState('box')


  const options = [
    { value: 'sphere', label: 'Sphere' },
    { value: 'circle', label: 'Circle' },
    { value: 'box', label: 'Box' },
    { value: 'plane', label: 'Plane' },
    { value: 'sky', label: 'Sky' },
  ]

  return (
    <div className="create-entity-field">
      <div className="create-entity-field__type">
        <Select
          value={selectedPirmative}
          onChange={value => setSelectedPrimative(value)}
          options={options}
        />
      </div>
      <div className="create-entity-field__editor">
        <textarea className="create-entity-field__editor-textarea"></textarea>
      </div>
    </div>
  )
}

