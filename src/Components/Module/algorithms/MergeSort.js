import React, { lazy } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Divider, Paper } from '@material-ui/core';
//import CodeAnalysisModule from '../../CodeAnalysis/CodeAnalysisModule.js';

const CodeAnalysisModule = lazy(() => import('../../CodeAnalysis/CodeAnalysisModule'));

const useStyles = makeStyles(theme => ({
    root: {
    },
    paper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

//const _path = '../../Resources/CodeAnalysis/algorithms/merge.cpp'
const _path = 'https://raw.githubusercontent.com/Kaillus/algorithms-datastructures/master/public/Resources/CodeAnalysis/algorithms/merge.cpp'

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
