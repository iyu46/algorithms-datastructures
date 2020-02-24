import React, {useEffect, useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
    code: {
        fontSize: "calc(4px + 1vw)",
        textAlign: "left!important",
        display: "inline-block!important",
        boxSizing: "border-box!important",
        position: "relative",
        left: "-100px",
    },
    tooltip: {
        position: 'relative',
    },
    text: {
        display: 'table',
        '&:hover': {
            color: '#eeeeee',
            backgroundColor: 'rgba(00, 00, 00, 0.6)',
            boxShadow: "0 0 10px 3px rgba(00, 00, 00, 0.6)",
        },
    },
}));

function CodeAnalysisModule(unit) {
    const classes = useStyles();
    const theme = useTheme();
    const [code, setCode] = useState([]);
    const [help, setHelp] = useState([]);
    const [top, setTop] = useState('');
    const _path = unit.unit;

    useEffect(() => {
        async function loadFile(path) {
            return await fetch(path)
                .then((r) => r.text())
                .then((r) => r.split("\n"))
                // .then((r) => r.filter(a => !a.includes("////")))
                // .then((r) => setCode(r));
                .then((r) => r.forEach(i => {
                    if (top === '') { // if the first line in the file (header)
                        setTop(i);
                    } else if (i === '\n') { // if the line is only a new line
                        let temp = code;
                        setCode(temp.splice(code.length - 1, 1, code[code.length - 1].concat(i)));
                    } else if (i.includes('////')) { // if line is a comment
                        let temp = help;
                        if (typeof help[code.length] === 'undefined') { // if it's null at this spot
                            setHelp(temp.splice(code.length, 1, (i.trimLeft())));
                        } else {
                            setHelp(temp.splice(code.length, 1, (help[code.length].concat(i).trimLeft())));
                        }

                    } else { // no other option, must be a line of code
                        let temp = code;
                        setCode(temp.push(i));
                    }
                }))};

        loadFile(_path);
    });

    return (
        <div className={classes.code}>
            {/* {code.map(item => 
            {if (!item.includes("}")) {
                return (
                    <Tooltip title={item} interactive className={classes.tooltip} placement="right">
                        <pre className={classes.text}>{item}</pre>
                    </Tooltip>)
            } else {
                return (<pre className={classes.text}>{item}</pre>)
            }})} */}
            {console.log(code)}
            {console.log(help)}
            {console.log(top)}
        </div>
    );
}

export default CodeAnalysisModule;
