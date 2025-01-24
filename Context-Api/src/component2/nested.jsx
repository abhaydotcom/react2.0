import React,{useContext} from 'react'
import { CounterContext } from '../context2/theme'

function Nested() {
    const countcontext=useContext(CounterContext)
  return (
    <div className='bg-violet-500 font-serif'>Using Context Api i will use the counter in this nested page  {countcontext}</div>
  )
}

export default Nested