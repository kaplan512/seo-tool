import React from 'react';
import PropTypes from 'prop-types';

const Word = (props) => {
    const {
        onClicked,
        name,
        wordAction
    } = props;


    return (
        <div
            onClick={onClicked(name)}
            className='minus-word'
        >
            {name}
        </div>
    )
};

Word.propTypes = {
    onClicked: PropTypes.func,
    name: PropTypes.string,
    wordAction: PropTypes.string
};

export {Word};