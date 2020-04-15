import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'

const Word = (props) => {
    const {
        onClicked,
        name,
        wordAction
    } = props;

    const words = useSelector(state => state.minusWords)
    const included = words.includes(name)

    return (
        <div
            onClick={onClicked(name)}
            className={included ? 'red minus-word' : 'minus-word'}
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