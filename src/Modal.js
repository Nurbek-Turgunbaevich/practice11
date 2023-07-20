import React, { useReducer } from "react";

const initialState = {
  count: 10
}

const numberReduser = (state, action) => {
  if(action.type === "increment"){
    return {count: state.count + 5}
  }else if(action.type === "decrement"){
    return {count: state.count - 5}
  }else if(action.type === 'umnojenia'){
    return {count: state.count * 3}
  }else if(action.type === 'razdel'){
    return {count: state.count / 3}
  }
  return state
};

const Modal = () => {
  const [number, dispatchNumber] = useReducer(numberReduser, initialState);

  return (
    <div
      style={{
        border: "1px solid",
        width: "300px",
        height: "300px",
        borderRadius: "10px",
        backgroundColor: "bisque",
        margin: "auto",
        position: "relative",
        marginTop: "10px",

        justifyContent: "center",
      }}
    >
      <h1>{number.count} </h1>
      <button onClick={() => {
        dispatchNumber({type: 'increment'})
      } } >5+</button>
      <button onClick={() => {
        dispatchNumber({type: 'decrement'})
      }} >5-</button>
      <button  onClick={() => {
        dispatchNumber({type: 'umnojenia'})
      }} >3*</button>
      <button onClick={() => {
        dispatchNumber({type: 'razdel'})
      }}  >3/</button>
    </div>
  );
};

export default Modal;
