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
        const lines = this.props.action === 'add' ? this.props.state.text : this.props.state.minusWords
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
            return <WordString
                key={index}
                index={index}
                line={item}
                action={this.props.action}
                altPressed={this.state.altPressed}
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