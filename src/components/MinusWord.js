import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import classNames from 'classnames'

const Word = (props) => {
    const {
        onClicked,
        name,
        wordIndex,
        lineIndex,
        activePhraseWord
    } = props;

    const words = [...useSelector(state => state.textReducer.minusWords), ...useSelector(state => state.textReducer.customMinusWords)]
    const included = words.includes(name)

    function testFunc (e) {
        console.log({e})
        // e = e || window.event;
    }

    let isPhraseIncludes = false

    const localMinusPhrases = useSelector(state => state.textReducer.minusPhrases.phrases)

    if (localMinusPhrases[lineIndex]) {
        for (let i of localMinusPhrases[lineIndex]) {
            if (i.indexes.includes(wordIndex)) {
                isPhraseIncludes = true
                break
            }
        }
    }

    let wordClasses = classNames({
        'minus-word': true,
        'red': included,
        'green': isPhraseIncludes,
        'green-active': activePhraseWord
    });

    return (
        <div
            onClick={onClicked(name, included, wordIndex)}
            className={wordClasses}
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
