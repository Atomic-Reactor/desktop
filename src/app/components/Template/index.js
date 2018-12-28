/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Plugins from 'reactium-core/components/Plugable/Plugins';

/**
 * -----------------------------------------------------------------------------
 * React Component: Template
 * -----------------------------------------------------------------------------
 */

export default class Template extends Component {
    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string,
        zone: PropTypes.string,
    };

    static defaultProps = {
        className: null,
        title: 'Atomic Reactor',
        zone: null,
    };

    render() {
        const { children, className, title, zone } = this.props;

        return (
            <Fragment>
                <Helmet>
                    <html lang='en' />
                    <title>{title}</title>
                    {className && <body className={className} />}
                </Helmet>
                <main role='main'>
                    {zone && <Plugins zone={zone} />}
                    {children}
                </main>
            </Fragment>
        );
    }
}
