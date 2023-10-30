import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AutoCompleteInput from './components/Input';
import Maps from './components/Maps';

import "./App.css";

const App = () => (
  <Provider store={store}>
    <div className="map-container">
      <h2>Google Place Auto Complete</h2>
      <AutoCompleteInput />
      <Maps />
    </div>
  </Provider>
);

export default App;

