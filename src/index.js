import React from 'react';
import ReactDOM from 'react-dom';
import '../public/css/main.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const render = Component => {
  ReactDOM.render(
    <App />
    , document.querySelector('#root')
  )
}

render(App)
registerServiceWorker();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept(() => { render(App) })
}
