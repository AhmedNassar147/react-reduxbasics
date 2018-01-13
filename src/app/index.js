import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app';
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

render(
  <Provider store={store}>
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
  </Provider>,
  window.document.getElementById("app"));