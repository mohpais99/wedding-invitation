import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from 'layout/Layout';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" render={props => <Layout {...props} /> } />
            </Switch>
        </Router>
    )
}

export default Routes
