/**
 * function component
 * use our service to call the server and grab the data
 * will have the data from the server in the state
 * will call TodoItem
 */

import React, {useState, useEffect} from "react";
import taskService from "../../services/task.service";
import TodoItem from "../TodoItem/TodoItem";

/**
 
 () => {...}
 (message1, anotherArg) => {...}
 message => {...}
 (message) => {
     return "hello"
 }
 message => "hello"

 */
export default function TodoList() {
    // Task[]
    const [taskList, setTaskList] = useState([]);

    // componentWillUnmount
    useEffect(() => {
        taskService.getTasks().then((tasks) => {
            setTaskList(tasks);
        });

        // (async () => {
        //     const tasks = await taskService.getTasks();
        //     setTaskList(tasks);
        // })()

        // return your cleanup function or return nothing
        // 
        // return 42;
        // return new Promise()
        // return function teardownFunc() {

        // }
    }, [])

    return (
        <ul className="list-group">
            {
                taskList.map(task => <TodoItem task={task} key={task.id}  />)
            }
            {/* <TodoItem ...
            <TodoItem ...
            <TodoItem ... */}
        </ul>
    )
}