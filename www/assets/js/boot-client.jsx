import 'css/global.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './configureStore.jsx';
import routes from './routes';

// MaterialUI
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState;
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

// This code starts up the React app when it runs in a browser. It sets up the routing configuration
// and injects the app into a DOM element.

// essential for hot module replacement!
if (module.hot){
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={ store }>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Router history={ history } children={ routes } />          
      </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
