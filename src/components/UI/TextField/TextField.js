import React from 'react';
import { TextField as TF, Divider } from '@material-ui/core';
import classes from './TextField.module.css';
import styles from './TextFieldStyles';

const TextField = (props) => {
    const classes = styles();

    return (
    <TF 
        className={classes.TextField}
        name={props.name}
        label={props.label}
        value={props.value}
        onChange={props.onChange}
    
    />
    )
}

export default TextField;