import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Styles = makeStyles(theme => ({
    ToolBar: {
        backgroundColor : "black",
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default Styles;