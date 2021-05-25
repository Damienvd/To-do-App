import React, {useState} from 'react'
import axios from "axios";


const AddToDoItem = (props) => {
    const {onAdd}=props
    const [description, setDescription]=useState("");
    const addToDoItem = async( ) => {
        try {
            const newTodoItem={
                description,
                isCompleted: false
            }
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/toDoItem`, newTodoItem)
            onAdd(response.data)
        } catch (error) {
            alert(error.response.toString())
        } finally{
            setDescription("")
        }
    }
    return (
        <tr>
            <td></td>
            <td>
                <input value={description} onChange={event => setDescription(event.target.value)} type="text"/>
            </td>
            <td>
                <button onClick={addToDoItem}>Add</button>
            </td>
        </tr>
    )
}

export default AddToDoItem
