import React, {useEffect, useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Divider, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
    code: {
        fontSize: "calc(4px + 2vmin)",
        textAlign: "left!important",
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
        async function loadData(path) {
            return await fetch(path)
                .then((r) => r.text())
                .then((r) => r.split("\n"))

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
                }));
        }

        loadData(_path);
    }, [_path, code, help, top]);

    return (
        <div className={classes.code}>
            {/* {code.map(item => <pre>{item}</pre>)} */}
            {console.log(code)}
            {console.log(help)}
            {console.log(top)}
        </div>
    );
}

export default CodeAnalysisModule;
