import React from 'react'
import "./Header.css"
import {useSelector} from 'react-redux'
function Header() {
  const response = useSelector((res)=>res);
  return (
    <>
    <div className='header' style={{backgroundColor:response.bg}}>

    </div>
    </>
  )
}

export default Header