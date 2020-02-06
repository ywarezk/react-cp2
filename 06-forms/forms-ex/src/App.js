import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Login from "./components/Login/Login";
// import Todo from './components/Todo/Todo';

import LoginParent from "./components/ParentLogin/ParentLogin";
import TodoParent from "./components/ParentTodo/ParentTodo";
import JwtContext from "./contexts/jwt-context";

function App() {
  // token will be in the state
  // token = null // initial
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <div className="container">

        <JwtContext.Provider value={ {jwtToken: token, setToken: setToken} } >
          <div className="row">
            
            <div className="col-6">
              <LoginParent />
            </div>

          </div>

          {/* <div className="row">
            
            <div className="col-6">
              <Flower />
            </div>

          </div> */}

          <div className="row">
            <div className="col-6">
              <TodoParent />
            </div>
          </div>
        </JwtContext.Provider>
        


      </div>
    </div>
  );
}

export default App;
