import React, {useContext, useEffect, useState} from "react";
import "./styles/App.css"
import {observer} from "mobx-react-lite";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {createContext} from "react";
import {Spinner} from "react-bootstrap";
import {check} from "./API/UserService";

export const Context = createContext(null);

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        check().then(data => {
            if (data) {
                user.setUser(data)
                user.setIsAuth(true)
            }
        }).finally(() => setLoading(false))
    }, [user])

    if (loading) {
        return <div className="loader"><Spinner/></div>
    }

    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
})

export default App;
