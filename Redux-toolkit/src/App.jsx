import AddTodo from "./component/addTodo" 
import Todos from "./component/todo"

function App() {
  

  return (
    <>
       <h1 className='bg-amber-500 text-center'>Redux Tool-kit </h1>

       
       <AddTodo/>
       <Todos/>
    </>
  )
}

export default App
