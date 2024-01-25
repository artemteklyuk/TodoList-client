import React from 'react';
import cl from './MyModal.module.css'
import MyButton from "../button/MyButton";
const MyModal = ({children, visible, setvisible}) => {
    const rootClasses = [cl.myModal]
    if (visible){
        rootClasses.push(cl.active)
    }
    return (
        <div className={rootClasses.join(" ")} onClick={() => setvisible(false)}>
            <div className={cl.myModalContent} onClick={(e)=> e.stopPropagation()}>
                {children}
                <MyButton style={{width: "100px", marginTop: "10px", textAlign: "center"}} onClick={() => setvisible(false)}>Отмена</MyButton>
            </div>
        </div>
    );
};

export default MyModal;