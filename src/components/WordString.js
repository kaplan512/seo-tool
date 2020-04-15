import React, {Component} from 'react';
import { connect } from "react-redux";
import {Word} from './MinusWord'
import {addMinusWord, removeMinusWord} from "../actions";

class WordString extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
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

        const lines = this.props.line.split(' ')
        const words = lines.map((item, index) =>
            <Word
                onClicked={this.selectWord}
                name={item}
                key={index}
                // wordAction={this.props.action}
            />
        )
        return (
            <div className={'words-wrapper-flex'}>
                {words}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(WordString)