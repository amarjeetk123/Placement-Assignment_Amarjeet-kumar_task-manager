import React, { useState } from 'react';
import "../App.css"

import { useReducer } from "react";

const initialSate = []
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK": return [
      ...state,
      {
        id: state.length + 1,
        name: action.payload
      }
    ]
      break;
    default: return state;
  }

}


const Homepage = () => {

  const [todos, dispatch] = useReducer(reducer, initialSate);
  const [userInput, setUserInput] = useState("");

  const handleClick = () => {
    if (userInput !== "") {
      dispatch({ type: 'ADD_TASK', payload: userInput });
      setUserInput("")
    }
    else {
      alert("Please Write Something in the Box.")
    }
  }
  const [isClick, setIsClick] = useState(false)
  const applyReadonly = () => {
    setIsClick(true)
  }

  return (
    <div className='main2'>
      <div className='big-box'>
        <center className='heading'>Task Manager App</center>
        <div className='top-box'>
          <input className='task-box'  value={userInput} onChange={(e) => setUserInput(e.target.value)} />
          <button className='add-btn' onClick={() => {
            handleClick();

          }} >Add Task</button>
        </div>


        <div className='containt'>
          {
            todos.map(todos => <input className='task-done' readOnly={isClick ? "false" : "true"} onClick={applyReadonly} key={todos.id} value={todos.name} />)
          }

          <div>
            {/* <button className='delete-btn'>Delete</button> */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Homepage