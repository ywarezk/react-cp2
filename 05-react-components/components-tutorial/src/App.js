import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

// import HelloFunc from "./components/Hello/HelloFunc";
// import HelloClass from "./components/Hello/HelloClass"

// import CountdownClass from "./components/";
// import CountdownClass from './components/Countdown/CountdownClass';
import CountdownFunc from "./components/Countdown/CountdownFunc";

function App() {
  const [isCountdownClassVisible, setIsCountdownVisible] = useState(true)

  return (
    <div className="App">
      <h1>Function component</h1>
      {/* <HelloFunc message={"hello from parent"} /> */}

      {
        isCountdownClassVisible && <CountdownFunc initialCountdown={5} destroyCb={setIsCountdownVisible} />
      }
      

      <h1>Class component</h1>
      {/* <HelloClass msg="hello class from parent" /> */}

      {
        /*isCountdownClassVisible && <CountdownClass initialCountdown={3} destroyCb={setIsCountdownVisible} />*/
      }
      
    </div>
  );
}

export default App;
