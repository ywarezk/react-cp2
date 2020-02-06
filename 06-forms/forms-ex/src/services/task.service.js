import Task from "../models/task.model";
import axios from "axios";

// let instance;

// TaskService.getInstance()
class TaskService {

    // static getInstance(/* ... */) {
    //     if (instance) {
    //         return instance;
    //     } else {
    //         instance = new TaskService();
    //         return instance;
    //     }
    // }

    // constructor(...) {

    // }

    // Promise{string}
    // getTasks2 = async () => {
    //     return "hello";
    // }

    // taskService.getTasks2().then((hello) => {

    //})

    /**
     * @returns {Promise<Task[]>}
     */
    getTasks = async (jwtToken) => {
        const response = await axios.get("https://academeez-login-ex.herokuapp.com/api/tasks", {
            headers: {
                "Authorization": `Bearer ${jwtToken}`
            }
        });
        // Promise<json> //
        const jsonTasks = response.data;
        return jsonTasks.map((taskJson) => new Task(taskJson));
    }
}

export default new TaskService();