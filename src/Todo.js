// Start by creating a class declaration describing the items (objects) on the list.
// We need objects, since every row on table contains two (not only) one fields.
export class Todo {
    title = '';
    description= ''

    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}
