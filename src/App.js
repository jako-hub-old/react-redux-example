import React from 'react';
import './App.css';
import ComponenteA from './components/ComponenteA';
import ComponenteB from './components/ComponenteB';
import {Provider as ReduxProvider} from 'react-redux';

import store from './store';

function App() {
  return (
    <ReduxProvider store = { store } >
      <ComponenteA />
      <ComponenteB />
    </ReduxProvider>
  );
}

export default App;
