import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {Context} from "../App";
import {login, registration} from "../API/UserService";
import {observer} from "mobx-react-lite";
import {NavLink, useLocation, useNavigate} from "react-router-dom";

const Login = observer(() => {
    const {user} = useContext(Context)
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const location = useLocation()
    const isLogin = location.pathname === "/login"
    const navigate = useNavigate()

    const auth = async (e) => {
        e.preventDefault()
        let data
        try {
            if (isLogin) {
                data = await login(mail, password)
            } else {
                data = await registration(mail, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate("/list")
        } catch (e) {
            alert(e.response.data.message)
        }

    }
    return (
        <div className="App">
            <div className={"login_page"}>
                {isLogin ?
                    <h1>
                        Страница для логина
                    </h1> :
                    <h1>
                        Страница для региситрации
                    </h1>
                }
                <form className={"login__form"}>
                    <MyInput
                        type="password"
                        placeholder="Введите пароль"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <MyInput
                        type="text"
                        placeholder="Введите логин"
                        onChange={(e) => setMail(e.target.value)}
                    />
                    <MyButton className={"login__button"}
                              onClick={auth}>{isLogin ? "Войти" : "Зарегистрироваться"}</MyButton>
                    {isLogin ?
                        <div>
                            Нет аккаунта?
                            <NavLink
                                style={{textDecoration: "none"}}
                                className="ms-1"
                                to="/registration">
                                &nbsp;Зарегестрируйся!
                            </NavLink>
                        </div>
                        :
                        <div>
                            Есть аккаунт?
                            <NavLink
                                style={{textDecoration: "none"}}
                                className="ms-1"
                                to="/login">
                                &nbsp;Войди!
                            </NavLink>
                        </div>
                    }

                </form>
            </div>
        </div>
    )
        ;
});
export default Login;