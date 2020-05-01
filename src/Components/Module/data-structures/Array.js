import React, { lazy } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import _analysis from './json/array';

const CodeAnalysisModule = lazy(() => import('../../CodeAnalysis/CodeAnalysisModule'));
const CodeCommentModule = lazy(() => import('../../CodeAnalysis/CodeCommentModule'));
const DSRuntimeModule = lazy(() => import('../../CodeAnalysis/DSRuntimeModule'));

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
       return ('https://raw.githubusercontent.com/Kaillus/algorithms-datastructures/master/public/Resources/CodeAnalysis/algorithms/' + id + '/' + target + '.cpp');
    } else {
        return ('../../Resources/CodeAnalysis/data-structures/' + id + '/' + target + '.cpp');
    }
}

function Array_(props) {
    const classes = useStyles();
    const _id = props.id;
    //console.log(props);
    let search = returnInputPath(props.useGitPath, _id, 'search');
    // let insertion = returnInputPath(props.useGitPath, _id, 'insertion');
    // let deletion = returnInputPath(props.useGitPath, _id, 'deletion');

    return (
        <div>
            <h1>{_id}</h1>
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
            <DSRuntimeModule unit={_analysis} id={_id} solo/>
        </div>
    );
}

export default Array_;
