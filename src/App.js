import { useReducer } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const dataReduser = (state, action) => {
    console.log("hello");
    return !state;
  };

  const [data, dispatchData] = useReducer(dataReduser, true);

  const changeState = () => {
    dispatchData();
  };

  return (
    <div className="App">
      <button onClick={changeState}>Show and Close</button>

      {data === true ? <h1>Helooooooo</h1> : <h1>Welcome</h1>}

      <Modal />
    </div>
  );
}

export default App;
