import React from 'react';
import classes from '../Digit/Digit.module.css';

const Digit = (props) => {
    return (
        <div className={classes.Digit} >{props.value}</div>
    )
}
export default Digit;   