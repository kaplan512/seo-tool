import React, {Component} from "react"
import { connect } from "react-redux";
import { addText } from "../../actions";
import {Textarea, Button} from '../../components/common';
import SelectMinusWords from "../../components/SelectMinusWords";
import SelectedMinusWords from "../../components/SelectedMinusWords";
import './index.scss';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: []
        };
    }
    handleChange = (e) => {
        let text = e.target.value.split('\n')
        this.setState({
            text: text
        });
    };
    collectWords = () => {
        // let result = this.state.text.filter((line) => {
        //     if (line.trim()) {
        //         return line.trim()
        //     }
        // })
        let result = []
        for (let i of this.state.text) {
            let item = i.trim()
            if (item) {
                result.push(item)
            }
        }
        console.log(result)
        this.props.dispatch(addText(result))
    };

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
            </div>

        )
    }
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(Home)