import {React, useState} from 'react'
import "./SetupFIle.css"
import {useDispatch, useSelector} from 'react-redux'
import {Red, Yellow, Green} from '../../redux/action/car.action';
function SetupFIle() {
  const dispatch = useDispatch();
  const [delay,setDelay] = useState(100);
  const response = useSelector((res)=>res)
  return (
    <div>
        <div className='car'>
           <marquee scrollamount={delay}>
                <div className='object'></div>
           </marquee>
        </div>
        {/* Dashboard Panel */}
        <div className='panel'>
            <div className='red' onClick={()=>{dispatch(Red())
                setDelay(Red().speed)
            }}>{(response === "STOP" ? response : null)}</div>
            <div className='yellow'onClick={()=>dispatch(Yellow())}>{(response === "START" ? response : null)}</div>
            <div className='green' onClick={()=>{dispatch(Green())
                setDelay(Green().speed)
            }}>{(response === "GO" ? response : null)}</div>
        </div>
        <div className='status'>STOP</div>
    </div>
  )
}

export default SetupFIle