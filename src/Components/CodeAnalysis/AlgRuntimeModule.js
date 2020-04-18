import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper, Tooltip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
    code: {
        fontSize: "calc(3px + 1vw)",
        display: "inline-block!important",
        boxSizing: "border-box!important",
        wordBreak: "break-all",
    },
    tooltip: {
        position: 'relative',
    },
    text: {
        display: 'table',
        wordBreak: "break-all",
        '&:hover': {
            color: '#eeeeee',
            backgroundColor: 'rgba(00, 00, 00, 0.6)',
            boxShadow: "0 0 10px 3px rgba(11, 11, 11, 0.6)",
        },
        cursor: 'pointer',
    },
    active: {
        color: '#eeeeee',
        backgroundColor: 'rgba(00, 00, 00, 0.6)',
        boxShadow: "0 0 10px 3px rgba(11, 11, 11, 0.6)",
    },
    table: {
        marginTop: '5px',
        marginBottom: '5px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '60%',
        minWidth: '650px',
        //backgroundColor: 'rgba(00, 00, 00, 0)',
    },
    tableNoBorderRight: {
        backgroundColor: 'rgba(00, 00, 00, 0.2)',
        fontWeight: '500',
        borderTop: '2px solid rgba(255, 255, 255, 1)',
        borderBottom: '2px solid rgba(255, 255, 255, 1)',
        borderLeft: '2px solid rgba(255, 255, 255, 1)',
        paddingRight: '2px',
    },
    tableNoBorderLeft: {
        backgroundColor: 'rgba(00, 00, 00, 0.2)',
        fontWeight: '500',
        borderTop: '2px solid rgba(255, 255, 255, 1)',
        borderBottom: '2px solid rgba(255, 255, 255, 1)',
        borderRight: '2px solid rgba(255, 255, 255, 1)',
        paddingLeft: '2px',
    },
    tableBorder: {
    },
    zero: {
        backgroundColor: 'rgba(00, 00, 00, 0.2)',
        fontWeight: '500',
        borderTop: '2px solid rgba(255, 255, 255, 1)',
        borderBottom: '2px solid rgba(255, 255, 255, 1)',
        borderLeft: '2px solid rgba(255, 255, 255, 1)',
        borderRight: '2px solid rgba(255, 255, 255, 1)',
    },
    one: {
        backgroundColor: 'rgba(00, 150, 00, 0.6)',
        color: '#004000',
        borderTop: '2px solid rgba(255, 255, 255, 1)',
        borderBottom: '2px solid rgba(255, 255, 255, 1)',
        borderLeft: '2px solid rgba(255, 255, 255, 1)',
        borderRight: '2px solid rgba(255, 255, 255, 1)',
    },
    two: {
        backgroundColor: 'rgba(130, 240, 10, 0.6)',
        color: '#004000',
        borderTop: '2px solid rgba(255, 255, 255, 1)',
        borderBottom: '2px solid rgba(255, 255, 255, 1)',
        borderLeft: '2px solid rgba(255, 255, 255, 1)',
        borderRight: '2px solid rgba(255, 255, 255, 1)',
    },
    three: {
        backgroundColor: 'rgba(255,100,0, 0.6)',
        color: '#804000',
        borderTop: '2px solid rgba(255, 255, 255, 1)',
        borderBottom: '2px solid rgba(255, 255, 255, 1)',
        borderLeft: '2px solid rgba(255, 255, 255, 1)',
        borderRight: '2px solid rgba(255, 255, 255, 1)',
    },
    four: {
        backgroundColor: 'rgba(255,0,0, 0.6)',
        color: '#804000',
        borderTop: '2px solid rgba(255, 255, 255, 1)',
        borderBottom: '2px solid rgba(255, 255, 255, 1)',
        borderLeft: '2px solid rgba(255, 255, 255, 1)',
        borderRight: '2px solid rgba(255, 255, 255, 1)',
    },
    five: {
        backgroundColor: 'rgba(255,0,0, 0.6)',
        color: '#800000',
        borderTop: '2px solid rgba(255, 255, 255, 1)',
        borderBottom: '2px solid rgba(255, 255, 255, 1)',
        borderLeft: '2px solid rgba(255, 255, 255, 1)',
        borderRight: '2px solid rgba(255, 255, 255, 1)',
    }
}));

function AlgRuntimeModule(unit) {
    const classes = useStyles();
    const [hover, setHoverIndex] = useState(false);
    const data = unit.unit;
    const _id = unit.id;
    const _solo = unit.solo;
    const rToC = [ //rankToColour
        classes.zero, // not used for runtime, outer cells
        classes.one, // constant
        classes.two, // logn
        classes.three, // n
        classes.four, // n log n
        classes.five, // n^2
    ];
    console.log(unit.unit);
    //const mounted = useRef(false);

    // useEffect(() => {
    //     async function loadFile(path) {
    //         return await fetch(path)
    //             .then((r) => r.text())
    //             .then((r) => r.split("\n"))
    //             .then((r) => r.filter(a => !a.includes("/* ") && !a.includes("/**/")))
    //             .then((r) => setCode(r));
    //     }

    //     if (!mounted.current) {
    //         loadFile(_analysis);
    //         mounted.current = true;
    //     }
    // });

    function createData(name, desc, rc_avg, rc_avg_rank, rc_avg_desc, rc_worst, rc_worst_rank, rc_worst_desc, sc_worst, sc_worst_rank, sc_worst_desc) {
        return { name, desc, rc_avg, rc_avg_rank, rc_avg_desc, rc_worst, rc_worst_rank, rc_worst_desc, sc_worst, sc_worst_rank, sc_worst_desc };
    }

    var rows = [];

    if (_solo) {
        rows.push( createData(data.name,
                data.desc,
                data.runtimeComplexity.average.runtime,
                data.runtimeComplexity.average.rank,
                data.runtimeComplexity.average.desc,
                data.runtimeComplexity.worst.runtime,
                data.runtimeComplexity.worst.rank,
                data.runtimeComplexity.worst.desc,
                data.spaceComplexity.worst.runtime,
                data.spaceComplexity.worst.rank,
                data.spaceComplexity.worst.desc)
        );
    } else {
            data.map( alg => {rows.push(createData(alg.name,
                alg.desc,
                alg.runtimeComplexity.average.runtime,
                alg.runtimeComplexity.average.rank,
                alg.runtimeComplexity.average.desc,
                alg.runtimeComplexity.worst.runtime,
                alg.runtimeComplexity.worst.rank,
                alg.runtimeComplexity.worst.desc,
                alg.spaceComplexity.worst.runtime,
                alg.spaceComplexity.worst.rank,
                alg.spaceComplexity.worst.desc))});
    }

    return (
        <div>
            <TableContainer component={Paper} className={classes.table} square>
            <Table aria-label="table">
                <TableHead>
                <TableRow>
                    <TableCell className={classes.zero}></TableCell>
                    <TableCell align="right" className={classes.tableNoBorderRight}>Runtime</TableCell>
                    <TableCell align="left" className={classes.tableNoBorderLeft}>Complexity</TableCell>
                    <TableCell align="center" className={classes.zero}>Space Complexity</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="left" className={classes.zero}>Algorithms</TableCell>
                    <TableCell align="center" className={classes.zero}>Average Case</TableCell>
                    <TableCell align="center" className={classes.zero}>Worst Case</TableCell>
                    <TableCell align="center" className={classes.zero}>Worst Case</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => (
                    <TableRow key={row.name}>
                        <Tooltip title={row.desc} interactive arrow>
                            <TableCell component="th" scope="row" className={classes.zero}>
                                {row.name}
                            </TableCell>
                        </Tooltip>
                        <Tooltip title={row.rc_avg_desc} interactive arrow>
                            <TableCell align="center" className={rToC[row.rc_avg_rank]}>{row.rc_avg}</TableCell>
                        </Tooltip>
                        <Tooltip title={row.rc_worst_desc} interactive arrow>
                            <TableCell align="center" className={rToC[row.rc_worst_rank]}>{row.rc_worst}</TableCell>
                        </Tooltip>
                        <Tooltip title={row.sc_worst_desc} interactive arrow>
                            <TableCell align="center" className={rToC[row.sc_worst_rank]}>{row.sc_worst}</TableCell>
                        </Tooltip>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
}

export default AlgRuntimeModule;