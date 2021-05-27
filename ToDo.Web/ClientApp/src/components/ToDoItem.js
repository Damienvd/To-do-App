import React, { Component } from 'react';
import axios from "axios";


const ToDoItem = (props) => {
    const {toDoItem, onDelete} = props;
    const handleItemDelete =async () => {
        try {
          const response = await axios.delete(`${process.env.REACT_APP_API_URL}/toDoItem/${toDoItem.id}`)
          onDelete(toDoItem)
        } catch (error) {
          alert(error.response.toString())
        }
      }
      const handleIsCompleted = async () => {
        const response = await axios.patch(`${process.env.REACT_APP_API_URL}/toDoItem/`)
      }
    return(
        <tr>
            <td>{toDoItem.id}</td>
            <td>{toDoItem.description}</td>
            <td><button onClick={handleIsCompleted}>No</button>{toDoItem.isCompleted || "test"}</td>
            <td><button onClick={handleItemDelete}>Delete</button></td>
        </tr>
    )
}

export default ToDoItem;