import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginFunc from "./components/Login/Login";
import LoginClass from "./components/Login/LoginClass";
import LoginClassControlled from "./components/Login/LoginClassControlled";
import LoginControlledFunc from "./components/Login/LoginControlled";
import SuperContact from "./components/Contact/Contact";
import LoginControlledCustomHooks from "./components/Login/LoginControlledCustomHooks";
import LoginFormik from "./components/Login/LoginFormik";

function App() {
  return (
    <div className="cp-app">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>
              Function components
            </h1>
            {/* <LoginFunc />

            <LoginControlledFunc />

            <LoginControlledCustomHooks /> */}

            <LoginFormik />
          </div>
          <div className="col-6">
            <h1>
              Class components
            </h1>
            <LoginClass />

            
            <LoginClassControlled />

            <SuperContact title="Contact Form" parentAttributeToTakeHere={42} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
