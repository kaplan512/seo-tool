import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'

const Word = (props) => {
    const {
        onClicked,
        name
    } = props;

    const words = [...useSelector(state => state.minusWords), ...useSelector(state => state.customMinusWords)]
    const included = words.includes(name)

    function testFunc (e) {
        console.log({e})
        // e = e || window.event;
    }

    return (
        <div
            onClick={onClicked(name, included)}
            // onClick={testFunc}
            className={included ? 'red minus-word' : 'minus-word'}
        >
            {name}
        </div>
    )
};

Word.propTypes = {
    onClicked: PropTypes.func,
    name: PropTypes.string
};

export {Word};