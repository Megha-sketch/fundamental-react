import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'fundamental-styles/dist/tile.css';

const classnames = classnamesBind.bind(styles);

const TileFooter = props => {
    const { children, className, ...rest } = props;

    const tileFooterClasses = classnames(
        'fd-tile__footer',
        className
    );

    return (
        <div {...rest} className={tileFooterClasses}>
            {children}
        </div>);
};

TileFooter.displayName = 'Tile.Footer';

TileFooter.propTypes = {
    /** Node(s) to render inside the header element */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

export default TileFooter;
