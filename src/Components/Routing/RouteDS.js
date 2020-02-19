import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function RouteDS(unit) {

    const parseUnit = (unit) => {
        console.log(unit);
        switch (unit.unit) {
            case "Array":
            return (
                <h1>Array!</h1>
            );
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
        parseUnit(unit)
    );
}

export default RouteDS;
