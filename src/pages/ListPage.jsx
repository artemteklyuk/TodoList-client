import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {useTasks} from "../hooks/useTasks";
import {Context} from "../App";
import ListsService from "../API/ListsService";
import {useLocation, useParams} from "react-router-dom";
import MyInput from "../components/UI/Input/MyInput";
import MySelect from "../components/UI/select/MySelect";
import MyModal from "../components/UI/MyModal/MyModal";
import AddForm from "../components/addForm";
import ListOfTasks from "../components/ListOfTasks";
import empty from "../accets/empty.svg"
import {Spinner} from "react-bootstrap";

const ListPage = observer(() => {
    const [loading, setLoading] = useState(true)
    const [modal, setModal] = useState(false)
    const params = useParams()
    const [title, setTitle] = useState("")
    const [filter, setFilter] = useState({sort: '', query: ''})
    const location = useLocation()
    const {lists} = useContext(Context)
    const {user} = useContext(Context)

    const sortedAndSearchedTasks = useTasks(lists.tasks, filter.sort, filter.query)
    useEffect(() => {
        ListsService.fetchLists(user.user.id).then(data => setTitle(data.filter(item => item.id == location.pathname.split('/')[2])[0].title))
        ListsService.fetchTasksById(params.id).then(data => lists.setTasks(data))
            .finally(() => setLoading(false))
    }, [])
    const addTask = (text) => {
        ListsService.createTask(text, params.id).then(r => lists.setTasks([r, ...lists.tasks]))
        setModal(false)
    }
    const close = () => {
        setModal(false)
    }
    const deleteTask = (id) => {
        ListsService.deleteOneTask(id)
        lists.setTasks(lists.tasks.filter(t => t.id !== id))
    }
    const updateTask = (id, text, isComplete) => {
        ListsService.updateTask(id, text, isComplete)
        lists.setTasks(lists.tasks.map(item => {
            if (item.id === id) {
                item.text = text
                item.isComplete = isComplete
                console.log(item)
            }
            return item
        }))
    }
    if (loading) {
        return <div className="loader"><Spinner/></div>
    }
    return (
        <div className="App">
            <div className="list__title"><h4 style={{wordWrap: "break-word"}}>{title}</h4></div>
            <div className="list__functions">
                <button
                    className="list__button"
                    onClick={() => setModal(true)}
                ></button>

                <MyModal
                    visible={modal}
                    setvisible={setModal}
                >
                    <AddForm
                        type={"task"}
                        create={addTask}
                    />
                </MyModal>


                <MyInput
                    value={filter.q}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                    placeholder="Поиск..."
                />
                <MySelect
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    defaultValue="all"
                    options={[
                        {value: 'all', name: 'Все'},
                        {value: 'Complete', name: 'Выполненые'},
                        {value: 'noComplete', name: 'Не выполненые'}

                    ]}
                />

            </div>
            <div className="lists_container">
                {sortedAndSearchedTasks.length === 0 ? 
                    <div>
                        <img src={empty} alt={"Пусто"}/>
                        <h4>Пусто...</h4>
                    </div> :
                    <ListOfTasks
                        tasks={sortedAndSearchedTasks}
                        deleteTask={deleteTask}
                        updateTask={updateTask}
                    />
                }
            </div>
        </div>
    )
});

export default ListPage;