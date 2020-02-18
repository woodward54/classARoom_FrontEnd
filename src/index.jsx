import React from 'react'
import ReactDOM from 'react-dom'
import "./style.css"
import { App } from './components/App'

const Entrypoint = () => {
  return (
    <App />
  )
}

ReactDOM.render(<Entrypoint />, document.getElementById("root"))