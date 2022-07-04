import React from 'react'
import {useSelector} from 'react-redux'
function Other() {
    const action = useSelector((res)=>res);
  return (
    <div>{action.msg}</div>
  )
}

export default Other