import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store'
import ConnectedIntlProvider from './components/ConnectedIntlProvider/ConnectedIntlProvider';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { addLocaleData } from 'react-intl';
import cs from 'react-intl/locale-data/cs';
import en from 'react-intl/locale-data/en';

addLocaleData([ ...en, ...cs ]);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedIntlProvider>
      <Router history={history}>
        <App />
      </Router>
    </ConnectedIntlProvider>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
