import {$authHost, $host} from "./index";

export default class ListsService {
    static async createList(title) {
        const {data} = await $authHost.post("api/list", {
            title: title
        })
        return data
    }

    static async deleteList(id) {
        return await $authHost.delete(`api/list?id=${id}`)
    }

    static async fetchLists(userId) {
        const {data} = await $authHost.get(`api/list/${userId}`)
        return data
    }


    static async fetchOneList(id) {
        const {data} = await $host.get("api/list/" + id)
        return data

    }

    static async fetchTasksById(listId) {
        const {data} = await $host.get("api/task", {
            params: {listId},
        })
        return data
    }

    static async createTask(text, listId) {
        const {data} = await $authHost.post("api/task", {
            text: text,
            listId: listId
        })
        return data
    }

    static async updateTask(id, text, isComplete) {
        const {data} = await $authHost.put("api/task", {
            id: id,
            text: text,
            isComplete: isComplete
        })
        return data
    }

    static async deleteOneTask(id) {
        const res = await $authHost.delete(`api/task?id=${id}`)
        return res
    }
}