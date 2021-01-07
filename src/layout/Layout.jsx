import React, { Component } from 'react';
import { HadistPage } from 'views';
import { Welcome, DatePage } from 'views';

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _notificationSystem: null,
            width: window.innerWidth
        };
    }

    updateDimensions() {
        this.setState({ width: window.innerWidth });
    }
    render() {
        return (
            <>
                <Welcome />
                <HadistPage {...this.state} />
                <DatePage {...this.state} />
            </>
        )
    }
}

export default Layout
