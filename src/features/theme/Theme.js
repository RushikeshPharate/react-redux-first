
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { changeColor } from "./themeSlice"


export default function Theme(){

    const [color, setColor] = useState('')
    const dispatch=useDispatch()
    return(
    <div className='container'>
        <input placeholder='color' value={color} onChange={(event)=>setColor(event.target.value)}/>
        <br/>
        <button onClick={()=>dispatch(changeColor(color))}> Change Color</button>
        {/* <br/>
        <p> {color}</p> */}
    </div>
    )
}