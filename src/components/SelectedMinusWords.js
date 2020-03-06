import React, {Component} from "react"
import { connect } from "react-redux";
import {Word} from "./MinusWord";

class SelectedMinusWords extends Component {
    constructor(props) {
        super(props)
    }

    selectWord = (word)=> {
        console.log(word)
    }

    render() {
        const minusWords = this.props.state.minusWords.map((item, index) =>
            <Word
                key={index}
                onClicked={this.selectWord}
                name={item}
            />
        )
        return (
            <fieldset>
                <legend>Минус слова</legend>
                <div className="words-wrapper-flex">
                    {minusWords}
                </div>
            </fieldset>
        )
    }
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(SelectedMinusWords)