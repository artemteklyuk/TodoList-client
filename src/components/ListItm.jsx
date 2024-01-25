import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const ListItm = (props) => {
    const router = useNavigate()
    return (
        <div className="item">
            <div className="item__title text">
                <strong>{props.list.title}</strong>
            </div>
            <div className="item__btns">
                <MyButton className="del__Btn" onClick={()=> props.remove(props.list.id)}>
                    Удалить
                </MyButton>
                <MyButton onClick={()=> router(`/list/${props.list.id}`)}>
                    Открыть
                </MyButton>
            </div>
        </div>
    );
};

export default ListItm;