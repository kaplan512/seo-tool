import React, {Component} from 'react';
import {connect} from "react-redux";
import {Word} from './MinusWord'
import {addMinusWord, removeMinusWord, testWord, testWordSec} from "../actions";

class WordString extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            phrase: ''
        }
    }
    selectWord = (word, included) => () => {
        if (this.props.altPressed) {
            this.setState({
                phrase: this.state.phrase.length ? `${this.state.phrase} ${word}` : `${word}`
            })
            console.log({word})
        } else {
            this.setState({
                phrase: ''
            })
            if (this.props.action === 'add') {
                this.props.dispatch(testWord(word))
                this.props.dispatch(addMinusWord(word))
                if (included) {
                    this.props.dispatch(removeMinusWord(word))
                    this.props.dispatch(testWordSec(word))
                }
            } else {
                this.props.dispatch(removeMinusWord(word))
            }
        }
    }

    render() {
        const lines = this.props.line.split(' ')
        const words = lines.map((item, index) => {
            return <Word
                onClicked={this.selectWord}
                name={item}
                key={index}
            />
        })

        let isActive = false

        let minusWords = [...this.props.state.minusWords, ...this.props.state.customMinusWords]
        for (let i of minusWords) {
            if (lines.includes(i)) {
                isActive = true
                break
            }
        }
        let activeString = false
        if (this.props.action === 'add' && isActive) {
            activeString = true
        }
        return (
            <div className={activeString ? 'active-string words-wrapper-flex' : 'words-wrapper-flex'}>
                {words}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(WordString)