import React from "react";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import { useInput } from './hooks/input-hook';
import Select from 'react-select';
import ColorPicker from './ColorPicker';

class CreateEntityField extends React.Component {
  // pickup here - add all colors in one dropdown

  updateState(s) {
    const newState = {
      ...this.props.component,
      ...s,
    };
    this.props.updateComponent(this.props.identifier, newState);
  }

  render() {
    const handleChange = (event) => {
      evt.preventDefault();
      console.log(`Submitting Name ${boxWidth} ${textArea}`);
    }

    const options = [
      { value: 'sphere', label: 'Sphere' },
      { value: 'cylinder', label: 'Cylinder' },
      { value: 'box', label: 'Box' },
      { value: 'plane', label: 'Plane' },
      { value: 'cone', label: 'Cone' },
    ]

    console.log("COMPONENT: ", this.props.component.type);
    return (
      <div className="create-entity-field" id={`id_${this.props.identifier}`}>
        <div className="create-entity-field__type">

          {/* <div>{JSON.stringify(state)}</div> */}
          <div className="select">
            <Select
              ref={this.ref}
              value={this.props.component.type}
              onChange={value => this.updateState({ type: value.value })}
              options={options}
            />
          </div>
        </div>

        <div className="color-picker-palette">
          <ColorPicker onChange={hex => this.updateState({ color: hex })} />
        </div>

        {this.props.component.type === 'sphere' && <div className="create-entity-field__editor">
          <div className="wrapper-1-param">
            <div className="center-col">Radius:</div>
            <div className="center-col"><input type="text" onChange={(event) => this.updateState({ radius: event.target.value })} /></div>
            {/* <input type="text" value={props.component.value} onChange= /> */}
          </div>
          {/* <textarea className="create-entity-field__editor-textarea" onChange={(event) => updateState({ radius: event.target.value })}></textarea> */}
        </div>}

        {this.props.component.type === 'cylinder' && <div className="create-entity-field__editor">
          <div className="wrapper-1-param">
            <div className="center-col">Radius: </div>
            <div className="center-col, col2"><input type="text" /></div>

            <div className="center-col, row2">Height: </div>
            <div className="center-col, row2, col2"><input type="text" /></div>

            {/* <input type="text" value={props.component.value} onChange= /> */}
          </div>
          {/* <textarea className="create-entity-field__editor-textarea" onChange={(event) => updateState({ radius: event.target.value })}></textarea> */}
        </div>}

        {this.props.component.type === 'box' && <div className="create-entity-field__editor">
          <div className="wrapper-1-param">
            <div className="center-col">Length: </div>
            <div className="center-col col2"><input type="text" /></div>

            <div className="center-col, row2">Height: </div>
            <div className="center-col, row2, col2"><input type="text" /></div>

            <div className="center-col, row3">Width: </div>
            <div className="center-col, row3, col2"><input type="text" /></div>

            {/* <input type="text" value={props.component.value} onChange= /> */}
          </div>
          {/* <textarea className="create-entity-field__editor-textarea" onChange={(event) => updateState({ radius: event.target.value })}></textarea> */}
        </div>}

        <div className="create-entity-field__editor">
          <textarea
            className="create-entity-field__editor-textarea"
            onChange={handleChange}
            // {...bindTextArea}
          />
        </div>

        <div className="kill-button">
          <Button variant="outline-danger" onClick={() => this.props.deleteComponent(this.props.identifier)}>X</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (_, ownProps) => {
  console.log("ownProps: ", ownProps);
  return ownProps;
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteComponent: (key) => dispatch({
      type: "DELETE_COMPONENT",
      payload: { key },
    }),
    updateComponent: (key, component) => dispatch({
      type: "UPDATE_COMPONENT",
      payload: { key, component },
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEntityField);
