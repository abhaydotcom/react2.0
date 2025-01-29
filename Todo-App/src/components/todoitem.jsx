import React,{useState} from "react";
import { UseTodo } from "../context";

import {Trash2,FilePenLine,Save  } from 'lucide-react';
 



function TodoItem({ todo }) {
    const [isTodoEditable,setIsTodoEditable]=useState(false)
    const [todoMsg,setTodoMsg]=useState(todo.todo)
    const {updateTodo,deleteTodo,toggleComplete}=UseTodo()

    const editTodo=()=>{
        updateTodo(todo.id,{...todo,todo:todoMsg})
        setIsTodoEditable(false)

    }

    const toggleCompleted=()=>{
        toggleComplete(todo.id)
    }


    return (
        <div    
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#a2d6e0]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                
                className="cursor-pointer"
                checked={todo.completed}
                
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="  inline-flex w-8 h-8 rounded-lg text-sm  justify-center items-center hover:bg-gray-300  shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? <Save className="text-green-600" strokeWidth={1.25} /> : <FilePenLine className="text-blue-700" strokeWidth={1.25} />}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm  justify-center items-center hover:bg-gray-300  shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
        <Trash2 className="text-red-600" strokeWidth={1.25} />
            </button>
        </div>
    );
}

export default TodoItem;
