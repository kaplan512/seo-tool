import React, {Component} from 'react';
import {connect} from "react-redux";
import {Word} from './MinusWord'
import {addMinusWord, removeMinusWord, addPhraseWord, pushPhraseWord} from "../actions";
import classNames from "classnames";

class WordString extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }
    selectWord = (word, included, wordIndex) => () => {
        console.log('select word');
        if (this.props.altPressed) {
            const index = this.props.index
            const havePhrase = Object.keys(this.props.state.minusPhrases.phrases).includes(index.toString())
            const activeString = this.props.state.minusPhrases.index
            const activeWords = this.props.state.minusPhrases.phrase
            // if (havePhrase) {
            //     console.log('you can not add phrase to the same string')
            //     this.props.dispatch(pushPhraseWord())
            // } else if (activeString === index && activeWords.includes(wordIndex)) {
            //     console.log('you can not add the same word to phrase')
            // } else {
            //     let item = {
            //         index,
            //         wordIndex
            //     }
            //     this.props.dispatch(addPhraseWord(item))
            // }
            if (activeString === index && activeWords.includes(wordIndex)) {
                console.log('you can not add the same word to phrase')
            } else {
                let item = {
                    index,
                    wordIndex
                }
                this.props.dispatch(addPhraseWord(item))
            }
        } else {
            if (this.props.action === 'add') {
                this.props.dispatch(pushPhraseWord())
                // this.props.dispatch(testWord(word))
                this.props.dispatch(addMinusWord(word))
                if (included) {
                    this.props.dispatch(removeMinusWord(word))
                    // this.props.dispatch(testWordSec(word))
                }
            } else {
                this.props.dispatch(removeMinusWord(word))
            }
        }
    }

    componentDidUpdate(prevProps) {
        // Популярный пример (не забудьте сравнить пропсы):
        if (this.props.altPressed !== prevProps.altPressed) {
            // console.log('test', this.props.state.minusPhrases.phrase)
            // this.props.dispatch(pushPhraseWord())
        }
    }

    render() {
        const lines = this.props.line.split(' ')
        let activeLinePhrase = false

        const minusPhrases = this.props.state.minusPhrases.phrases
        const text = this.props.state.text
        let minusPhrasesToSearch = []
        for (let i in minusPhrases) {
            let minusPhrase = []
            let string = text[i].split(' ')
            for (let j of minusPhrases[i]) {
                for (let k of j) {
                    minusPhrase.push(string[k])
                }
            }
            minusPhrasesToSearch.push(minusPhrase.join(' ').trim())
        }
        for (let substr of minusPhrasesToSearch) {
            if (this.props.line.includes(substr)) {
                activeLinePhrase = true
                break
            }
        }

        const words = lines.map((item, wordIndex) => {
            const activePhraseString = this.props.state.minusPhrases.index === this.props.index
            const activePhraseWord = activePhraseString && this.props.state.minusPhrases.phrase.includes(wordIndex)

            return <Word
                onClicked={this.selectWord}
                name={item}
                key={wordIndex}
                wordIndex={wordIndex}
                lineIndex={this.props.index}
                activePhraseWord={activePhraseWord}
            />
        })

        let minusWords = [...this.props.state.minusWords, ...this.props.state.customMinusWords]
        let isActive = Object.keys(this.props.state.minusPhrases.phrases).includes(this.props.index.toString())
        if (!isActive) {
            for (let i of minusWords) {
                if (lines.includes(i)) {
                    isActive = true
                    break
                }
            }
        }
        let activeString = false
        if (this.props.action === 'add' && isActive) {
            activeString = true
        }

        let stringClasses = classNames({
            'words-wrapper-flex': true,
            'active-string': activeString,
            'active-string-phrase': activeLinePhrase
        });
        return (
            <div className={stringClasses}>
                {words}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(WordString)
