import Task from "../models/task.model";

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
    getTasks = async () => {
        const response = await fetch("https://nztodo.herokuapp.com/api/task/?format=json");
        // Promise<json> //
        const jsonTasks = await response.json();
        return jsonTasks.map((taskJson) => new Task(taskJson));
    }
}

export default new TaskService();