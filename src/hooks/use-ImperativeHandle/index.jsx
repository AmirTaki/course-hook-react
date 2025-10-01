import { useRef, useState } from "react"
import MyInput from "./myInput"

const UseImperativeHandleExample = () => {
    const ref = useRef(null)
    const [value, setValue] =  useState('')
    return(
        <div>
            <MyInput  ref = {ref}/>
           
            <button 
                className="btn-custom"
                onClick={() => {ref.current.focus()}}
            >
                focus
            </button>
        
            <button 
                className="btn-custom"
                onClick = {() => {ref.current.clear();  setValue('') }}
            >
                clear
            </button>
            <button 
                className="btn-custom"
                onClick={() => {setValue(ref.current.value)}}
            >  
                getValue
            </button>

            <div className="">value is : {value}</div>
        </div>
    )
}

export default UseImperativeHandleExample