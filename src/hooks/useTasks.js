import {useMemo} from "react";

export const useSortedTasks = (tasks, sort) => {
    return useMemo(() => {
        if (sort === "Complete") {
            return [...tasks].filter(task => task.isComplete === true)
        }
        if (sort === "noComplete") {
            return [...tasks].filter(task => task.isComplete !== true)
        }
        if (sort === "all") {
            return [...tasks].filter(task => task)
    }
            return tasks
    }, [sort, tasks])
}
export const useTasks = (tasks, sort, query) => {
    const sortedLists = useSortedTasks(tasks, sort)
    return useMemo(() => {
        return sortedLists.filter(task => task.text.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedLists])
}
