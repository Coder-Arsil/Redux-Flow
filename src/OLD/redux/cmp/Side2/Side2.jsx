import React from 'react'
import "./Side2.css"
import {useSelector} from 'react-redux'
function Side2() {
    const response = useSelector((res)=>res);
  return (
    <div className='side2' style={{backgroundColor:response.bg}}>

    </div>
  )
}

export default Side2