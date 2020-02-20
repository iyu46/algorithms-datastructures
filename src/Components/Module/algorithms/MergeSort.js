import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Divider, Paper } from '@material-ui/core';
import CodeAnalysisModule from '../../CodeAnalysis/CodeAnalysisModule.js';

const useStyles = makeStyles(theme => ({
    root: {
    },
    paper: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: "60%",
    },
}));

//const _path = '../../Resources/CodeAnalysis/algorithms/merge.cpp'
const _path = 'https://kaillus.github.io/algorithms-datastructures/Resources/CodeAnalysis/algorithms/merge.cpp'

function MergeSort(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [inProp, setInProp] = React.useState(false);

    return (
        <div>
            <h1>Merge Sort is a divide-and-conquer algorithm</h1>
            <Paper elevation={3} className={classes.paper}>
                <CodeAnalysisModule unit={_path}/>
            </Paper>
        </div>
    );
}

export default MergeSort;
