import React, {useEffect, useState, useContext} from "react";
import todoService from "../../services/task.service";
import JwtContext from "../../contexts/jwt-context";

export default function Todo() {
    // const hello = () =>
    const contextData = useContext(JwtContext);
    const jwtToken = contextData.jwtToken

    // list of todos
    const [todos, setTodos] = useState([]);

    useEffect(() => {

        if (!jwtToken) return;

        todoService.getTasks(jwtToken).then((todoList) => {
            setTodos(todoList);
        })
    }, [jwtToken])

    return (
        <ul className="list-group">
            {
                todos.map((todo) =>  {
                    return (
                        <li className="list-group-item" key={todo.id}>
                            <h5>{todo.title}</h5>
                            <p>{todo.description}</p>
                        </li>
                    )
                })
            }            
        </ul>
    )
}