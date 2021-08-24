import React from 'react';
/* import Login from './components/login'; */
import { Provider } from 'react-redux';
import Peliculas from './components/Peliculas';
import Login from './pages/Login';
import { store } from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      {/*  <div>
        <Login></Login>
      </div> */}
      {/*    <Peliculas /> */}
      <Login></Login>
    </Provider>
  );
}

export default App;
