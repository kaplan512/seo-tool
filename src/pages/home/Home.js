import React, {Component} from "react"
import { connect } from "react-redux";
import { addText } from "../../actions";
import {Textarea, Button} from '../../components/common';
import SelectMinusWords from "../../components/SelectMinusWords";
import './index.scss';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: [],
            result: []
        };
    }
    handleChange = (e) => {
        let text = e.target.value.split('\n')
        this.setState({
            text: text
        });
    };
    collectWords = () => {
        let result = []
        for (let i of this.state.text) {
            let item = i.trim()
            if (item) {
                result.push(item)
            }
        }
        this.props.dispatch(addText(result))
    }

    selectMinusWords = () => {
        this.setState({
            result: []
        })
        const minusWords = [...this.props.state.minusWords, ...this.props.state.customMinusWords]
        let indexes = []
        let result = []
        // const result = this.state.props.text.filter(line => !minusWords.includes(line))
        for (const [index, value] of this.props.state.text.entries()) {
            let array1= value.split(' ')
            let array2= minusWords

            function findCommonElements3(arr1, arr2) {
                return arr1.some(item => arr2.includes(item))
            }

            if(!findCommonElements3(array1, array2)) {
                indexes.push(index)
            }
        }
        for (let i of indexes) {
            result.push(this.props.state.text[i])
        }
        this.setState({
            result: result
        })
    }

    render() {
        let isDisable = !this.state.text
        return (
            <div>
                <div className='wrapper'>
                    <fieldset>
                        <legend>Ваши запросы</legend>
                        <Textarea
                            title='test'
                            onChanged={this.handleChange}
                        />
                        <Button
                            onClick={this.collectWords}
                            name='начать сбор слов'
                            isDisable={isDisable}
                        />
                    </fieldset>
                    <SelectMinusWords action="add" textarea={false}/>
                </div>
                <div className="wrapper">
                    <SelectMinusWords action="remove" textarea={true}/>
                </div>
                <div className="wrapper">
                    <fieldset>
                        <legend>Минус фразы</legend>
                        <Textarea
                            title='test'
                            payload={this.state.result}
                        />
                        <Button
                            onClick={this.selectMinusWords}
                            name='собрать ключевые фразы'
                        />
                    </fieldset>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(Home)