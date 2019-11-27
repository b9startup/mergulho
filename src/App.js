import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import 'siimple';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

import './config/ReactotronConfig';

import history from './services/history';
import { store, persistor } from './store';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />

          <ToastContainer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
