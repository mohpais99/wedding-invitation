import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from 'layout/Layout';
// import { Preload } from 'components';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" render={props => <Layout {...props} /> } exact />
                {/* <Route path="/preload" component={Preload} /> */}
            </Switch>
        </Router>
    )
}

export default Routes
