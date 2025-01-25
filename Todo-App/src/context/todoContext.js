import React from "react";

export const TodoContext=React.createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}

});

export const UseTodo=()=>{
    return React.useContext(TodoContext);
}


export const TodoProvider=TodoContext.Provider