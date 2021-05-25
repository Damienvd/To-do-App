import React, { Component } from 'react';

const ToDoItem = (props) => {
    const {toDoItem} = props;
    return(
        <tr>
            <td>{toDoItem.id}</td>
            <td>{toDoItem.description}</td>
            <td style={{color: "green"}}>{toDoItem.isCompleted || "test"}</td>
        </tr>
    )
}

export default ToDoItem;