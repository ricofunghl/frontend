import { Card as MaterialCard, CardHeader, CardContent } from '@material-ui/core';
import Styles from './CardStyles';
import React from 'react';

const Card = (props) => {
    const classes = Styles();

    return (
        <MaterialCard className={classes.LoginCard}>
            <CardHeader title ={props.title} />
            <CardContent>
                {props.children}
            </CardContent>
        </MaterialCard>
    )
}

export default Card;