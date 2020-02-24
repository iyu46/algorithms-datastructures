import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Divider, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}));

function OrderTraversal(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [state, setState] = React.useState(false);

    return (
        <div>
            <h1>{props.props}</h1>
        </div>
    );
}

export default OrderTraversal;
