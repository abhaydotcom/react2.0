 
import './App.css'
import {useDispatch,useSelector} from 'react-redux'
import { increment,decrement } from './features/counter/countSlice'

 

function App() {

  const dispatch=useDispatch()
  const count=useSelector(state=>state.counter.value)
 

  return (
    <>
     <h1>Redux ToolKit(RTK)</h1>

      <div><h2>Count: {count} </h2></div>
      <br />
      <br />
      <button onClick={()=>dispatch(increment())} >Increament</button>
      <br />
      <button onClick={()=>dispatch(decrement())}  >Decreament</button>


        
    </>
  )
}

export default App
