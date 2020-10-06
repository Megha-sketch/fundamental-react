import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'fundamental-styles/dist/layout-panel.css';

const classnames = classnamesBind.bind(styles);

const LayoutPanelHeader = props => {
    const { children, className, ...rest } = props;

    const panelHeaderClasses = classnames(
        'fd-layout-panel__header',
        className
    );

    return <div {...rest} className={panelHeaderClasses}>{children}</div>;
};

LayoutPanelHeader.displayName = 'LayoutPanel.Header';

LayoutPanelHeader.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

export default LayoutPanelHeader;
