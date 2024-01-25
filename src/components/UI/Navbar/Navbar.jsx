import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import MyButton from "../button/MyButton";
import {Context} from "../../../App";
import {observer} from "mobx-react-lite";

const Navbar = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const logout = () => {
        user.setIsAuth(false)
        localStorage.removeItem("token")
        navigate("/login")
    }
    const posts = () => navigate("/list")
    return (
        <div className="navbar">
            {
                user.isAuth ?
                    <div className="navbar__links">
                        <MyButton onClick={logout}>
                            Выйти
                        </MyButton>
                        <MyButton onClick={posts}>Списки</MyButton>

                    </div>
                    : <div><h1>ToDoList</h1></div>
            }

        </div>

    );
})

export default Navbar;