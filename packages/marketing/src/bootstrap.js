import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

// mount function to start up the app
const mount = (el) => {
  ReactDOM.render(
    <App />,
    el
  )
}

// run locally
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')

  if (devRoot) {
    mount(devRoot)
  }
}

// run through container
export { mount }
