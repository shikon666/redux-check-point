import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {filterDone  } from '../redux/actions'
function NavBar({ setSearch }) {
  const dispatch = useDispatch();

  return (
    <div className="NAVBAR">
      <h1 className="title">TO DO LISTE</h1>

      <Form.Select 
      className="filter"
        aria-label="Default select example"
        onChange={(e) => { dispatch(filterDone(e.target.value))}}
       
      >
        <option value={0} selected>
          Filter By
        </option>
        <option value={true}>Done</option>
        <option value={false}>Is not done</option>
      </Form.Select>

      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
    </div>
  );
}

export default NavBar;
