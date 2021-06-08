import React, { Component } from 'react';
import axios from "axios";


const ToDoItem = (props) => {
    const {toDoItem, onDelete, onUpdate} = props;
    const handleItemDelete =async () => {
        try {
          const response = await axios.delete(`${process.env.REACT_APP_API_URL}/toDoItem/${toDoItem.id}`)
          onDelete(toDoItem)
        } catch (error) {
          alert(error.response.toString())
        }
      }
      const handleIsCompleted = async () => {
        const updatedToDoItem = {
          ...toDoItem,
          isCompleted: !toDoItem.isCompleted
        }
        try {
          const response = await axios.patch(`${process.env.REACT_APP_API_URL}/toDoItem/`,updatedToDoItem)
          onUpdate(toDoItem, response.data)
        } catch (error) {
          alert(error.response.toString())
        }
        
      }
    return(
        <tr>
            <td>{toDoItem.id}</td>
            <td>{toDoItem.description}</td>
            <td><button onClick={handleIsCompleted}>{toDoItem.isCompleted ? "Yes" : "No"}</button></td>
            <td><button onClick={handleItemDelete}>Delete</button></td>
        </tr>
    )
}

export default ToDoItem;