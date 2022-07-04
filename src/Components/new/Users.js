import React from 'react'
import {useDispatch, useSelector} from 'react-redux'


function Users() {
    const dispatch = useDispatch();
    const response = useSelector((res)=>res);
  return (
    <div>
        <button onClick={()=>{dispatch({type:"simu"})}}>Click</button>
        <h1>{response}</h1>
    </div>
  )
}

export default Users