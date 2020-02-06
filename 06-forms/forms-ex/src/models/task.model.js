/**
 * a class that represents the task table
 */

export default class Task {
    constructor(json) {
        Object.assign(this, json)
        // this.id = json.id;
        // this.title = json.title;
        // this.description = json.description;
    }
}