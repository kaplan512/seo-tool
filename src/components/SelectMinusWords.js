import React, {Component} from "react"
import { connect } from "react-redux";
import WordString from './WordString'
import {Button, Textarea} from "./common";
import {addCustomMinusWOrd, pushPhraseWord} from "../actions";

class SelectMinusWords extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            altPressed: false
        }
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    addCustomMinusWords = () => {
        this.props.dispatch(addCustomMinusWOrd(this.state.text.trim().split(' ')))
    }

    pressAltStart = (event) => {
        if(event.key === 'Alt') {
            this.setState({
                altPressed: true
            })
        }
    }
    pressAltFinish = (event) => {
        if(event.key === 'Alt') {
            this.setState({
                altPressed: false
            }, () => this.props.dispatch(pushPhraseWord()))
        }
    }
    componentDidMount () {
        if (this.props.action === 'add') {
            document.addEventListener("keydown", this.pressAltStart, false);
            document.addEventListener("keyup", this.pressAltFinish, false);
        }
    }
    componentWillUnmount () {
        if (this.props.action === 'add') {
            document.removeEventListener("keydown", this.pressAltStart, false);
            document.removeEventListener("keyup", this.pressAltFinish, false);
        }
    }

    render() {
        let minusPhrasesToRender = []

        if (this.props.action !== 'add') {
            let minusPhrasesLocal = []
            const minusPhrases = this.props.minusPhrases.phrases
            let localId = 0
            for (let i in minusPhrases) {
                for (let j of minusPhrases[i]) {
                    // minusPhrasesLocal.push(j);
                    minusPhrasesToRender.push(
                        <WordString
                            line={j.string}
                            phraseObj={j}
                            stringIndex={i}
                            action={this.props.action}
                            altPressed={this.state.altPressed}
                            noSplit={true}
                            key={localId}
                        />
                    );
                    localId++
                }
            }
            // minusPhrasesToRender = minusPhrasesLocal.map((item, index) => {
            //     return <WordString
            //         key={index}
            //         index={index}
            //         line={item}
            //         action={this.props.action}
            //         altPressed={this.state.altPressed}
            //         noSplit={true}
            //     />
            // })
        }
        const lines = this.props.action === 'add' ? this.props.text : this.props.minusWords
        const linesToRender = lines.map((item, index) => {

            return <WordString
                key={index}
                index={index}
                line={item}
                action={this.props.action}
                altPressed={this.state.altPressed}
            />
        })
        const title = this.props.action === 'add' ? 'Кликай по минус словам' : 'Минус слова'
        return (
            <fieldset>
                <legend>{title} {this.props.action}</legend>
                <div className='words-wrapper-block'>
                    {linesToRender}
                </div>
                <div>
                    {this.props.action !== 'add' ? minusPhrasesToRender : null}
                </div>
                <div>
                    {this.props.textarea  && (
                            <React.Fragment>
                                <Textarea title='test' onChanged={this.handleChange}/>
                                <div>
                                    <Button
                                        onClick={this.addCustomMinusWords}
                                        name='добавить минус слова'
                                    />
                                </div>
                            </React.Fragment>
                        )}
                </div>
            </fieldset>
        )
    }
}

const mapStateToProps = state => ({
    // state
    text: state.textReducer.text,
    minusPhrases: state.textReducer.minusPhrases,
    minusWords: state.textReducer.minusWords,
})

export default connect(mapStateToProps)(SelectMinusWords)
