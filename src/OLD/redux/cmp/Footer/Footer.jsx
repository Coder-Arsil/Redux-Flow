import React from 'react'
import "./Footer.css"
import {useSelector} from 'react-redux'
function Footer() {
  const response = useSelector((res)=>res);
  return (
    <div className='footer'  style={{backgroundColor:response.bg}}>

    </div>
  )
}

export default Footer