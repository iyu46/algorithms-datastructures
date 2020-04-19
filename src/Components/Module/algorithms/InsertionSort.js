import React, { lazy } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import _analysis from './json/insertion-sort';

const CodeAnalysisModule = lazy(() => import('../../CodeAnalysis/CodeAnalysisModule'));
const CodeCommentModule = lazy(() => import('../../CodeAnalysis/CodeCommentModule'));
const AlgRuntimeModule = lazy(() => import('../../CodeAnalysis/AlgRuntimeModule'));

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        maxWidth: '50vw',
    },
    container: {
        marginLeft: "10px",
        marginRight: "10px",
    }
}));


function InsertionSort(props) {
    const classes = useStyles();
    //const _id = "merge";
    const _id = props.id;
    console.log(props);
    let _path;
    if (props.useGitPath) {
        _path = 'https://raw.githubusercontent.com/Kaillus/algorithms-datastructures/master/public/Resources/CodeAnalysis/algorithms/' + _id + '.cpp';
    } else {
        _path = '../../Resources/CodeAnalysis/algorithms/' + _id + '.cpp';
    }

    return (
        <div>
            <h1>Insertion Sort is an iterative algorithm</h1>
            <Paper elevation={3} className={classes.container}>
                <Grid container spacing={0} direction="row" alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={0} className={classes.paper}>
                            <CodeAnalysisModule unit={_path} id={_id}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={0} className={classes.paper}>
                            <CodeCommentModule unit={_path} id={_id}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
            <AlgRuntimeModule unit={_analysis} id={_id} solo/>
        </div>
    );
}

export default InsertionSort;
