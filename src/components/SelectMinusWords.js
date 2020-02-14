import React, {Component} from "react"
import { connect } from "react-redux";
import {Word} from './MinusWord'
import {addMinusWord} from '../actions/index'

class SelectMinusWords extends Component {
    constructor(props) {
        super(props)
    }
    selectWord = (word) => () => {
        this.props.dispatch(addMinusWord(word))
    }

    render() {
        const splittedWords = this.props.state.text.split(' ')
        const words = splittedWords.map((item, index) =>
            <Word
                key={index}
                onClicked={this.selectWord}
                name={item}
            />
        )
        return (
            <fieldset>
                <legend>Кликай по минус словам</legend>
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