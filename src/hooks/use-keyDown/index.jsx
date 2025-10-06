import { useEffect, useRef } from "react"



const useKeyDown = (callback, keys) => {

    const onKeyDown = (event) => {
        console.log(event.key)
        const wasPressed = keys.some((key)=> event.key === key)
        if(wasPressed){
            event.preventDefault()
            callback()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)
        return()=> {
            document.removeEventListener('keydown', onKeyDown)
        }
    }, [onKeyDown])


}




const UseKeyDownExapmle = () => {
    const inputRef =  useRef()
  
    useKeyDown(()=>{
        inputRef.current.value = ''
    }, ['Escape', 'Enter'])
   
    useKeyDown(()=>{
        inputRef.current.style.background = 'blue'
    }, ['Shift'])

    return(
        <div>
            <input 
                type="text"
                className="input-custom"   
                ref = {inputRef} 
            />
        </div>
    )
}

export default UseKeyDownExapmle