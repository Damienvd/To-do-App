import React, { useEffect, useState } from 'react';
import axios from "axios";
import ToDoItem from "./ToDoItem";
import AddToDoItem from './AddToDoItem';

const ToDo = () => {
  const [todoitems, settodoitems] = useState(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/toDoItem`)
        if(mounted)
        {
          settodoitems(response.data);
          console.log(response.data);
        }
      } catch (error) {
        alert(error.response.toString())
      }
    })();

    return () => {
      mounted = false;
    }
  }, [])

  const handleAdd=newItem => {
    settodoitems([newItem, ...todoitems])
  }

  if(!todoitems)
  {
    return null;
  }

        return (
          <div>
            <h1>To Do</h1>

            <p>This is a simple to do List.</p>
            <table>
              <thead>
                <tr>
                  <th style={{color: "red", paddingRight: "10px"}}>ID</th>
                  <th style={{color: "red", paddingRight: "10px"}}>Description</th>
                  <th style={{color: "red", paddingRight: "10px"}}>IsCompleted</th>
                </tr>
              </thead>
              <tbody>
                <AddToDoItem onAdd={handleAdd}/>
              {todoitems.map(todoitem => (
              <ToDoItem toDoItem={todoitem}/>
              ))}
              </tbody>
            </table>
            
          </div>
          //todoitems array of objects > map through it(loop)
        );
}

export default ToDo;