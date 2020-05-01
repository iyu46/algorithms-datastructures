import React, { lazy } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import d1 from './json/linked-list';
import d2 from './json/doubly-linked-list';

const CodeAnalysisModule = lazy(() => import('../../CodeAnalysis/CodeAnalysisModule'));
const CodeCommentModule = lazy(() => import('../../CodeAnalysis/CodeCommentModule'));
const DSRuntimeModule = lazy(() => import('../../CodeAnalysis/DSRuntimeModule'));

const _analysis = [d1, d2];

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

function returnInputPath(useGitPath, id, target) {
    if (useGitPath) {
       return ('https://raw.githubusercontent.com/Kaillus/algorithms-datastructures/master/public/Resources/CodeAnalysis/data-structures/' + id + '/' + target + '.cpp');
    } else {
        return ('../../Resources/CodeAnalysis/data-structures/' + id + '/' + target + '.cpp');
    }
}

function LinkedList(props) {
    const classes = useStyles();
    const _id = props.id;
    //console.log(props);
    //let init = returnInputPath(props.useGitPath, _id, 'init');
    let search = returnInputPath(props.useGitPath, _id, 'search');
    // let insertion = returnInputPath(props.useGitPath, _id, 'insertion');
    // let deletion = returnInputPath(props.useGitPath, _id, 'deletion');

    return (
        <div>
            <span>Linked lists are usually implemented using some sort of array. The structure itself consists of nodes that contain data and pointers to point to other nodes. The beginning of the list (the 'head') is saved in the higher-order linked list struct - optionally the end of the list (the 'tail') can be saved as well. The linked list can be circular (the tail node points to the head node) and/or doubly-linked (each node points to the node before it as well as after it in the list). In the following code snippets, unless stated otherwise the linked lists are non-circular.</span>
            <Paper elevation={3} className={classes.container}>
                <Grid container spacing={0} direction="row" alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={0} className={classes.paper}>
                            <CodeAnalysisModule unit={search} id={_id}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={0} className={classes.paper}>
                            <CodeCommentModule unit={search} id={_id}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
            <DSRuntimeModule unit={_analysis} id={_id}/>
        </div>
    );
}

export default LinkedList;
