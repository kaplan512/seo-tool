import React from 'react';
import PropTypes from 'prop-types';

const Textarea = (props) => {
    const {
        title,
        onChanged,
        payload,
    } = props;

    return (
        <div>
            <textarea
                onChange={(e) => onChanged(e)}
                value={payload && payload.join('\n')}
            />
        </div>
    )
};

Textarea.propTypes = {
    payload: PropTypes.array
};

export {Textarea};
