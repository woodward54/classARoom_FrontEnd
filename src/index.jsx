import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom'
import './style.css'
import App from './components/App'
import reducer, { initialState } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(reducer, initialState);
const store = createStore(reducer, composeWithDevTools());

const Entrypoint = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(<Entrypoint />, document.getElementById("root"))