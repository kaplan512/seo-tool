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

    const words = [...useSelector(state => state.minusWords), ...useSelector(state => state.customMinusWords)]
    const included = words.includes(name)

    function testFunc (e) {
        console.log({e})
        // e = e || window.event;
    }

    const minusPhraseIndexes = useSelector(state => state.minusPhrases.phrases[lineIndex])
    let isPhraseIncludes = false
    if (minusPhraseIndexes && minusPhraseIndexes.length) {
        for (let i of minusPhraseIndexes) {
            if (i.includes(wordIndex)) {
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
