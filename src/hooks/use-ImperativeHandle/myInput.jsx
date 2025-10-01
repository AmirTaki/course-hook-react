import { forwardRef, useImperativeHandle, useRef, useState } from "react"

const MyInput = forwardRef(function MyInput(props, ref)  {

  
    const [value, setValue] =  useState('')
    const inputRef =  useRef(null)

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    

    useImperativeHandle(ref, () => {
        return{
            focus(){
                inputRef.current.focus()
            },
            clear(){
                inputRef.current.value = "",
                setValue('')
            },
            value
        }
    })

    return (
        <>
            <input 
                type="text" 
                className="input-custom" 
                onChange={handleChange}
                ref = {inputRef}    
            />
            {/* <div className=""> input is : {value}</div> */}
        </>
    )
})

export default MyInput