import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { addTodo , todoIsDone ,deleteToDo ,filterDone } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Task from '../component/Task'
function Mainpage({search}) {
  const dispatch = useDispatch();
  const todo =useSelector((state)=>state.todolist)
  const filtertodo =useSelector((state)=>state.filter)
  const [add, setAdd] = useState("");
  const submitHandler = () => {dispatch(addTodo({ title: add, id:Date.now() , isDone: false }))};
  const checkToDo = (data,skander) => { dispatch (todoIsDone(data,skander))};
  


  return (
    <div>
    
    
      <InputGroup className="mb-3">

        <Form.Control
          onChange={(e) => setAdd(e.target.value)}
          aria-describedby="basic-addon2"
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={submitHandler}
        >
          {" "}
          ADD
          <i class="fas fa-plus-circle"></i>
        </Button>
      </InputGroup>




      {filtertodo.length < todo.length
        ? filtertodo
            ?.filter((el) =>
              el.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((el) => (
              <Task el={el}   deleteToDo={deleteToDo}  checkToDo={checkToDo} />
            ))
        : todo
            ?.filter((el) =>
              el.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((el) => (
              <Task el={el}  deleteToDo={deleteToDo} checkToDo={checkToDo}  />
            ))
          }

 </div>
  )
}

export default Mainpage;
