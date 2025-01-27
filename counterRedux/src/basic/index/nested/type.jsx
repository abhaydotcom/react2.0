import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
function Type () {

  const num=useSelector(state=>state.counter.value);
  return (
    <div> this is comming form React redux ToolKit: {num} </div>
  )
}

export default Type 