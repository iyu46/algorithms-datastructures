import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Divider, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}));

function CodeAnalysisModule(unit) {
    const classes = useStyles();
    const theme = useTheme();
    const [state, setState] = React.useState(false);

    const parseUnit = (unit) => {
        console.log(unit);
        switch (unit.unit) {
            case "Array":
            return (
                <h1>Array!</h1>
            );
            case "Insertion Sort":
            return (
                <h1>Insertion Sort!</h1>
            );
            default: 
            return (
                <h1>Uh oh</h1>
            )
        }

    }

    return (
        parseUnit(unit)
    );
}

export default CodeAnalysisModule;
