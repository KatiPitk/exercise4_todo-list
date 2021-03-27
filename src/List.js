import React from 'react';
import uuid from 'react-uuid';
import Form from './Form';
import Row from './Row';
import { Todo } from './Todo';

// Add List component to your project. List component displayes todos (array) as html table (and later on form to add new todos).
// Install and use uuid library to generate unique keys to table rows "npm i react-uuid". Otherwise you will receive warning related to this.
export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state ={todos: new Array(new Todo('Test1', 'Test description'))};
    }

    // Modify list component to display Form. Also addToList method is added to handle calls from the form. 
    // Form passes added title and description, which are used to update state.
    // In this case state is an array and therefore array is updated by concatenating new todo to existing array 
    // (you just canno simply reassign whole array, since it does not work).
    // See more about concatenating, for example, on https://howchoo.com/g/mzbmyzi2zda/how-to-merge-two-arrays-in-javascript. 
    addToList = (title,description) => {
        this.setState(prevState => ({
            todos: [...prevState.todos, new Todo(title, description)]
        }))
    }

    render() {
        return (
            <>
            <h3>ToDos</h3>
            <Form add={this.addToList} />
            <table>
                <thead>
                    <tr>
                        <th className="output_title">Title</th>
                        <th className="output_description">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.todos.map(item => (
                        <Row key={uuid()} title={item.title} description={item.description} />
                    ))}
                </tbody>
            </table>
            </>
        )
    }
}