var mongoose = require('mongoose');


var Todo = mongoose.model('Todos', {
    name: {
        type: String,

    },
    age: {
        type: Number,
    },
    completed: {
        type: Boolean,
        default: false
    },
    completeAt: {
        type: Number,
        default: null
    }
});

let addTodo = (body) => {
    let todo = new Todo(
        {
            name: body.name,
            age: body.age,
        }

    );
    return todo.save();
}

module.exports = { Todo, addTodo }
