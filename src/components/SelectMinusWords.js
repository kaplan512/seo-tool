import React, {Component} from "react"
import { connect } from "react-redux";
import WordString from './WordString'
import {Textarea} from "./common";

class SelectMinusWords extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    render() {
        const lines = this.props.action === 'add' ? this.props.state.text : this.props.state.minusWords
        const linesToRender = lines.map((item, index) =>
            <WordString
                key={index}
                line={item}
                action={this.props.action}
            />
        )
        const title = this.props.action === 'add' ? 'Кликай по минус словам' : 'Минус слова'
        let isTextArea = this.props.textarea  ? <Textarea title='test' onChanged={this.handleChange}/> : null
        return (
            <fieldset>
                <legend>{title} {this.props.action}</legend>
                <div className='words-wrapper-block'>
                    {linesToRender}
                </div>
                <div>
                    {isTextArea}
                </div>
            </fieldset>
        )
    }
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(SelectMinusWords)