import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';


function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            {/* <a href=""></a> */}
            <Link to="/about">About Page</Link>
          </li>
          <li>
            {/* <a href=""></a> */}
            <Link to="/">Home Page</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/about/:title">
          <About />
        </Route>
        <Route path="**">
          <Error404 />
        </Route>
      </Switch>      
    </BrowserRouter>
    
  );
}

export default App;
