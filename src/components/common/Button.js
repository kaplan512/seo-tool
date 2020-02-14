import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const {
        onClick,
        name,
        isDisable
    } = props;

    return (
        <div>
            <button
                onClick={onClick}
                disabled={isDisable}
            >
                {name}
            </button>
        </div>
    )
};

Button.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string,
    isDisable: PropTypes.bool,
};

export {Button};