import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'

// mount function to start up the app
const mount = (el, { onNavigate, defaultHistory }) => {

  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(
    <App history={history} />,
    el
  )

  return {
    onParentNavigate({ pathname: nextPathname }) {

      const { pathname } = history.location;

      if (pathname !== nextPathname) history.push(nextPathname)
    }
  }
}

// run locally
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root')

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() })
  }
}

// run through container
export { mount }
