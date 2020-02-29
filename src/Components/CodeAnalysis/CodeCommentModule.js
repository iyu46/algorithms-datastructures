import React, {useEffect, useState, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const useStyles = makeStyles(theme => ({
    root: {
    },
    code: {
        fontSize: "calc(2px + 1vw)",
        wordWrap: "break-all",
        overflowWrap: "break-word",
        wordBreak: "normal",
        whiteSpace: "unset",
        maxWidth: "50vw",
        display: "inline-block",
        boxSizing: "border-box!important",
    },
    tooltip: {
        position: 'relative',
    },
    text: {
    },
    active: {
        color: '#eeeeee',
        backgroundColor: 'rgba(00, 00, 00, 0.6)',
        boxShadow: "0 0 10px 3px rgba(11, 11, 11, 0.6)",
    },
}));

function CodeCommentModule(unit) {
    const classes = useStyles();
    const [code, setCode] = useState([]);
    const _path = unit.unit;
    const _id = unit.id;
    const mounted = useRef(false);

    useEffect(() => {
        async function loadFile(path) {
            return await fetch(path)
                .then((r) => r.text())
                .then((r) => r.split("\n"))
                .then((r) => r.filter(a => a.includes("/* ")))
                .then((r) => setCode(r));
        }

        if (!mounted.current) {
            loadFile(_path);
            mounted.current = true;
        }
    });

    return (
        <div className={classes.code}>
            <Element name="comments" className="active" id={_id} style={{
                position: 'relative',
                height: '300px',
                overflow: 'hidden',
                paddingBottom: '300px',
            }}>
                {code.map((item, index) => 
                    <Element name={index}>
                        {/* <Link activeClass="active" to={index} spy={true} smooth={true} duration={250} containerId={_id}> */}
                            <p>{item.split("/* ").join("").split(" */").join("").concat("\n", "\n")}</p>
                        {/* </Link> */}
                    </Element>)}
            </Element>
        </div>
    );
}

export default CodeCommentModule;
