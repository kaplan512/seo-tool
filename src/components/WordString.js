import React, {Component} from 'react';
import {connect} from "react-redux";
import {Word} from './MinusWord'
import {addMinusWord, removeMinusWord, addPhraseWord, removePhrase} from "../actions";
import classNames from "classnames";

class WordString extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }
    selectWord = (word, included, wordIndex) => () => {
        if (this.props.altPressed) {
            const index = this.props.index
            const activeString = this.props.minusPhrases.index
            const activeWords = this.props.minusPhrases.phrase
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
                this.props.dispatch(addMinusWord(word))
                if (included) {
                    this.props.dispatch(removeMinusWord(word))
                }
            } else {
                this.props.dispatch(removeMinusWord(word))
            }
        }
    }

    removePhrase = () => () => {
        console.log('phrase remove', this.props.phraseObj, this.props.stringIndex)
        let payload = {
            stringIndex: this.props.stringIndex,
            phraseObj: this.props.phraseObj
        }
        this.props.dispatch(removePhrase(payload))
    }

    render() {
        const lines = !this.props.noSplit ? this.props.line.split(' ') : [...this.props.line]
        let activeLinePhrase = false

        const minusPhrases = this.props.minusPhrases.phrases
        let minusPhrasesToSearch = []
        for (let i in minusPhrases) {
            for (let j of minusPhrases[i]) {
                minusPhrasesToSearch.push(j.string)
            }
        }
        for (let substr of minusPhrasesToSearch) {
            if (!this.props.noSplit ? this.props.line.includes(substr) : this.props.line.includes(substr)) {
                activeLinePhrase = true
                break
            }
        }

        const words = !this.props.noSplit ? lines.map((item, wordIndex) => {
            const activePhraseString = this.props.minusPhrases.index === this.props.index
            const activePhraseWord = activePhraseString && this.props.minusPhrases.phrase.includes(wordIndex)

            return <Word
                onClicked={this.selectWord}
                name={item}
                key={wordIndex}
                wordIndex={wordIndex}
                lineIndex={this.props.index}
                activePhraseWord={activePhraseWord}
            />
        }) : <Word
                onClicked={this.removePhrase}
                name={this.props.line}
                // key={wordIndex}
                // wordIndex={wordIndex}
                // lineIndex={this.props.index}
                // activePhraseWord={activePhraseWord}
            />

        let minusWords = [...this.props.minusWords, ...this.props.customMinusWords]
        let isActive = false
        if (!this.props.noSplit) {
            isActive = Object.keys(this.props.minusPhrases.phrases).includes(this.props.index.toString())
            if (!isActive) {
                for (let i of minusWords) {
                    if (lines.includes(i)) {
                        isActive = true
                        break
                    }
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
    text: state.textReducer.text,
    minusPhrases: state.textReducer.minusPhrases,
    minusWords: state.textReducer.minusWords,
    customMinusWords: state.textReducer.customMinusWords,
})

export default connect(mapStateToProps)(WordString)
