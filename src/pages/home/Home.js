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
            text: ''
        };
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };
    collectWords = () => {
        this.props.dispatch(addText(this.state.text))
        // this.props.dispatch({type: 'ADD_TEXT', payload: e.target.value})
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
                    <SelectMinusWords/>
                </div>
                <SelectedMinusWords/>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(Home)