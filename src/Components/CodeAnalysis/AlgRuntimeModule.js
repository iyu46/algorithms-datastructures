import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper } from '@material-ui/core';

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
        minWidth: 650,
    },
}));

function AlgRuntimeModule(unit) {
    const classes = useStyles();
    const [hover, setHoverIndex] = useState(false);
    const _analysis = unit.unit;
    const _id = unit.id;
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

    function createData(name, time, space, carbs, protein) {
        return { name, time, space, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

    return (
        <div>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="right">Runtime Complexity</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">Space Complexity&nbsp;(g)</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="right">Average Case</TableCell>
                    <TableCell align="right">Worst Case&nbsp;(g)</TableCell>
                    <TableCell align="right">Worst Case&nbsp;(g)</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => (
                    <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.time}</TableCell>
                    <TableCell align="right">{row.space}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
}

export default AlgRuntimeModule;