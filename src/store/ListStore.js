import {makeAutoObservable} from "mobx";

class ListStore {
    constructor(props) {
        this._lists = []
        this._tasks = []
        makeAutoObservable(this)
    }
    setLists(lists) {
        this._lists = lists
    }
    setTasks(tasks) {
        this._tasks = tasks
    }
    get tasks() {
        return this._tasks
    }
    get lists() {
        return this._lists
    }

}
export default new ListStore()