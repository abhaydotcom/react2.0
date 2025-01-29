import React, {useState}from 'react'
import { UseTodo } from '../context'
import {BookmarkPlus} from 'lucide-react'
function TodoForm() {

    const [todo,setTodo]=useState("") 

    const {addTodo}=UseTodo()

    const add=(e)=>{
        e.preventDefault()
        if(!todo)return
        addTodo({todo,completed:false})
        setTodo("")
    }


  return (
    <form onSubmit={add}  className="flex">
    <input
        type="text"
        placeholder="Write Task..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
    />
    <button type="submit" className="rounded-r-lg px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white shrink-0">
    <BookmarkPlus strokeWidth={1.25} /> 
    </button>
</form>

  )
}

export default TodoForm