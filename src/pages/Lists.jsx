import React, {useContext, useEffect, useState} from "react";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import AddForm from "../components/addForm";
import ListOfLists from "../components/ListOfLists";
import {observer} from "mobx-react-lite";
import {Context} from "../App";
import ListsService from "../API/ListsService";
import empty from "../accets/empty.svg";
import {Spinner} from "react-bootstrap";


const Lists = observer(() => {
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(true)
    const {lists} = useContext(Context)
    const {user} = useContext(Context)
    console.log(user.user.id)
    useEffect(() => {
        ListsService.fetchLists(user.user.id).then(data => lists.setLists(data))
            .finally(() => setLoading(false))
    }, [lists])
    const Lists = lists.lists

    const removeList = (id) => {
        ListsService.deleteList(id)
        lists.setLists(lists.lists.filter(p => p.id !== id))
    }

    const createList = (newList) => {
        ListsService.createList(newList)
            .then(r => lists.setLists([...lists.lists, r]))
        setModal(false)
    }
    const openList = (id) => {

    }
    if (loading) {
        return <div className="loader"><Spinner/></div>
    }
    return (
        <div className="App">
            <div className="App__create">
                <div className={"App__title"}><h4>Мои списки задач</h4></div>
                <MyButton
                    style={{alignSelf: "end"}}
                    onClick={() => setModal(true)}
                >
                    Создать список
                </MyButton>
                <MyModal
                    visible={modal}
                    setvisible={setModal}
                >
                    <AddForm
                        type={"list"}
                        create={createList}
                    />
                </MyModal>
            </div>

            {Lists.length === 0 ?
                <div>
                    <img src={empty} alt={"Пусто"}/>
                    <h4>Пусто...</h4>
                </div> :
                <ListOfLists
                    remove={removeList}
                    open={openList}
                    lists={Lists}
                />
            }

        </div>
    )
})

export default Lists;