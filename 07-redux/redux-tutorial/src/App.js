import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import Header from './components/Header/Header';
import Login from './components/Login/Login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />

        <Login />
      </div>
    </Provider>
    
  );
}

export default App;
