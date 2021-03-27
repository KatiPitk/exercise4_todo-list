import React from 'react';

// Create also Row component as function component. Type rfc (if ES7/React extension is installed to generate new function component) 
// to use snippet for creating a component (or type declaration by yourself).
// Row component displayes table row containing title and description for the todo.
export default function Row(props) {
    return (
        <tr>
            <td>
                {props.title}
            </td>
            <td>
                {props.description}
            </td>
        </tr>
    )
}
