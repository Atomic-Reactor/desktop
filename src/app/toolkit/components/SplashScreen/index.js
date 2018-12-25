/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component, Fragment } from 'react';

/**
 * -----------------------------------------------------------------------------
 * Toolkit Element: SplashScreen
 * -----------------------------------------------------------------------------
 */

class SplashScreen extends Component {
    static dependencies() {
        return typeof module !== 'undefined' ? module.children : [];
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='splash' style={{ minHeight: 375, minWidth: 800 }} />
        );
    }
}

// Default properties
SplashScreen.defaultProps = {};

export default SplashScreen;
