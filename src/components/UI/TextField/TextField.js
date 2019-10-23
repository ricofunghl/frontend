import React from 'react';
import { TextField as TF, Divider } from '@material-ui/core';

const TextField = (props) => (

    <TF 
        margin='normal'
        name={props.name}
        label={props.label}
        value={props.value}
        onChange={props.onChange}
    
    />
)

export default TextField;