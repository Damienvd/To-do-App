import React, { useEffect, useState } from 'react';
import axios from "axios";

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
        }
      } catch (error) {
        alert(error.response.toString())
      }
    })();

    return () => {
      mounted = false;
    }
  }, [])

  if(!todoitems)
  {
    return null;
  }

        return (
          <div>
            <h1>To Do</h1>

            <p>This is a simple to do List.</p>

          </div>
          //todoitems array of objects > map through it(loop)
        );
}

export default ToDo;