import React from 'react';
import RouteAlg from './RouteAlg';
import RouteDS from './RouteDS';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function RoutingManager(params) {

    const parseParams = (params) => {
        console.log(params);
        switch (params.type) {
            case "data-structures":
            return (
                <RouteDS unit={params.unit} />
            );
            case "algorithms":
            return (
                <RouteAlg unit={params.unit} />
            );
            default: 
            return (
                <h1>Uh oh</h1>
            )
        }

    }

    return (
        parseParams(params)
    );
}

export default RoutingManager;
