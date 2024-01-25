import React from 'react';
import classes from "./MyInput.module.css"


const MyInput = (props) => {
    return (
        <input className={classes.myInput} {...props} placeholder={props.placeholder}>

        </input>
    );
};

export default MyInput;