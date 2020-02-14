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
            <div>
                <div>
                    {minusWords}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(SelectedMinusWords)