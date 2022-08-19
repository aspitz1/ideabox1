import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitIdea = event => {
        event.preventDefault();
        const newIdea = {
            id: Date.now(),
            ...this.state
        }
        this.props.addIdea(newIdea);
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState({ title: '', description: '' })
    }

    render() {
        return (
            <form>
                <input 
                    type='text'
                    placeholder='Title'
                    name='title'
                    value={this.state.title}
                    onChange={this.handleChange}
                />

                <input 
                    type='text'
                    placeholder='Description'
                    name='description'
                    value={this.state.description}
                    onChange={this.handleChange}
                />

                <button onClick={event => this.submitIdea(event)}>
                    SUBMIT
                </button>
            </form>
        )
    }
}

export default Form;