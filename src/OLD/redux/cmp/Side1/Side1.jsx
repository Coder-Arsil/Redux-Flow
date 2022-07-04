import React from 'react'
import "./Side1.css"
import {useSelector} from 'react-redux'
function Side1() {
    const response = useSelector((res)=>res);
  return (
    <div className='side1' style={{backgroundColor:response.bg}}>

    </div>
  )
}

export default Side1