import React from 'react';

// Add form component. Form component displays a form with title and description fields.
// Information is stored into state variables. Add method is passed from List component,
// so when new item is saved, that method is called (and therefore list is updated with the new todo item).
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    handleSubmit = (event) => {
        this.props.add(this.state.title,this.state.description);
        this.setState ({
            title: '',
            description: ''
        })
        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input_label">
                    <label>Title</label>
                    <input name="title" value={this.state.title} onChange={this.handleChange}/>
                </div>
                <div className="input_label">
                    <label>Description</label>
                    <textarea name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                </div>
                <button>Add</button>
            </form>
        )
    }
}
