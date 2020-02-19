import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function RouteAlg(params) {

    const parseUnit = (params) => {
        console.log(params);
        switch (params.unit) {
            case "Insertion Sort":
            return (
                <h1>Insertion Sort!</h1>
            );
            default: 
            return (
                <h1>Uh oh</h1>
            )
        }

    }

    return (
        parseUnit(params)
    );
}

export default RouteAlg;
