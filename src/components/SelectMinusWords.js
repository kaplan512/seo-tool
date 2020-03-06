import React, {Component} from "react"
import { connect } from "react-redux";
import {Word} from './MinusWord'
import {addMinusWord, removeMinusWord} from '../actions/index'

class SelectMinusWords extends Component {
    constructor(props) {
        super(props)
    }
    selectWord = (word) => () => {
        if (this.props.action === 'add') {
            console.log('dispatch from component')
            this.props.dispatch(addMinusWord(word))
        } else {
            console.log('dispatch from component second')
            this.props.dispatch(removeMinusWord(word))
        }
    }

    render() {
        const splittedWords = this.props.action === 'add' ? this.props.state.text.split(' ') : this.props.state.minusWords
        const words = splittedWords.map((item, index) =>
            <Word
                key={index}
                onClicked={this.selectWord}
                name={item}
                wordAction={this.props.action}
            />
        )
        const title = this.props.action === 'add' ? 'Кликай по минус словам' : 'Минус слова'
        return (
            <fieldset>
                <legend>{title} {this.props.action}</legend>
                <div className='words-wrapper-flex'>
                    {words}
                </div>
            </fieldset>
        )
    }
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(SelectMinusWords)