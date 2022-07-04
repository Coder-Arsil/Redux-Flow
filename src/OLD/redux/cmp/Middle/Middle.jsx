import React from 'react'
import "./Middle.css"
import {useDispatch} from 'react-redux'
function Middle() {
    const action = useDispatch();
  return (
   <div className='main'>
     <div className='btns'>
        <button onClick={()=>action({
            type:"red"
        })}>Red</button>
        <button onClick={()=>action({
            type:"blue"
        })}>Blue</button>
        <button onClick={()=>action({
            type:"green"
        })}>GREEN</button>
    </div>
   </div>
  )
}

export default Middle