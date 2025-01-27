import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { increment,decrement } from '../features/counter/countSlice'


function Index() {

    const count=useSelector(state=>state.counter.value)
    const dispatch=useDispatch()




  return (
    <>
    <div>Index</div>

    <div><h2>count {count}</h2></div>

    <button onClick={()=>dispatch(increment())} >add</button>

    <button 
      
   >Sub</button>

    </>
  )
}

export default Index