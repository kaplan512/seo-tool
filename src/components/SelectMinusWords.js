import React, {Component} from "react"
import { connect } from "react-redux";
import WordString from './WordString'
import {Button, Textarea} from "./common";
import {addCustomMinusWOrd} from "../actions";

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
            })
        }
    }
    getPhrase = (phrase) => {
        console.log({phrase})
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
            const minusPhrases = this.props.state.minusPhrases.phrases
            for (let i in minusPhrases) {
                // let phrase = {
                //     string: '',
                //     location: {}
                // }
                const localText = this.props.state.text[i].split(' ')
                for (let j of minusPhrases[i]) {
                    let phrase = {
                        string: '',
                        location: {}
                    }
                    // console.log({i}, {j});
                    phrase.location[i] = j
                    for (let k of j) {
                        // console.log(this.props.state.text, localText, j)
                        phrase.string = phrase.string + localText[k] + ' '
                        // phrase.string = phrase.string.trim()
                        // phrase.location[i] = j
                    }
                    // console.log({phrase});
                    minusPhrasesToRender.push(phrase);
                }
                // minusPhrasesToRender.push(phrase);
                // console.log({i}, minusPhrases[i]);
            }
            // console.log({minusPhrasesToRender})
        }
        const lines = this.props.action === 'add' ? this.props.state.text : this.props.state.minusWords
        const minusPhraseStrings = Object.keys(this.props.state.minusPhrases.phrases)
        // let testArr = []
        // let localMinusWords = [...this.props.state.minusWords, ...this.props.state.customMinusWords]
        const linesToRender = lines.map((item, index) => {
            // if (this.props.action === 'add') {
            //     testArr = localMinusWords.filter((letter) => {
            //         if (item.includes(letter)) {
            //             console.log({index})
            //         }
            //         return item.includes(letter)
            //     })
            // }
            const havePhrase = minusPhraseStrings.includes(index.toString())

            return <WordString
                key={index}
                index={index}
                line={item}
                action={this.props.action}
                altPressed={this.state.altPressed}
                havePhrase={havePhrase}
            />
        })
        // console.log({testArr})
        const title = this.props.action === 'add' ? 'Кликай по минус словам' : 'Минус слова'
        return (
            <fieldset>
                <legend>{title} {this.props.action}</legend>
                <div className='words-wrapper-block'>
                    {linesToRender}
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
    state
})

export default connect(mapStateToProps)(SelectMinusWords)
