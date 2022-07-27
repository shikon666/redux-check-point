import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from "react-redux";


function Task({el ,deleteToDo,checkToDo }) {

  const dispatch=useDispatch()
  
  return (
    <div>
    
      <div className="todoitem">
        <span>skander list</span>
        <h6>{el.title}</h6>
        <div>
          <Button variant={el.isDone ? "success" : "outline-success"}  onClick={()=> checkToDo({ ...el, isDone: !el.isDone }, document.getElementsByClassName('filter')[0].value)}><i className="fas fa-check"></i></Button>
          <Button variant="danger" className="m-3" onClick={() => dispatch(deleteToDo(el.id))}><i class="fas fa-trash-alt"></i></Button>
        </div>
      </div>
    
    
    
    </div>
  )
}

export default Task