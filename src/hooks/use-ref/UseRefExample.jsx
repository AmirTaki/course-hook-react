import { useEffect, useRef, useState } from "react"

const UseRefExample = () => {
   
    const [name, setName] =  useState('');
//  const [renderCount, setRenderCount] =  useState(0);
   
    const renderCount = useRef (0);
    const inputRef = useRef ();
    const prevsName  = useRef ('');


    useEffect(() => {
    // setRenderCount((prevRenderCount) => (prevRenderCount + 1))
        renderCount.current += 1
    })
   
    useEffect(() => {
        // console.log( document.querySelector('input'))
        console.log(inputRef.current)
    })

    useEffect(() => {
        prevsName.current = name
    },[name])

    return(
        <div>
            <input 
                type="text" 
                className="input-custom" 
                onChange={(e) => {setName(e.target.value)}}
                ref = {inputRef}
            />
            <p>my name is {name}</p>
            <p>my previes name is {prevsName.current}</p>
            <p>this component render {renderCount.current} times</p>

            <button 
                className="btn-custom"
                onClick={() => {
                    inputRef.current.value = "learning use ref in react"
                    inputRef.current.style.background = 'silver'
                    inputRef.current.style.color = 'black'
                    inputRef.current.focus()
                }}
            >
                    click me
            </button>
        </div>
    )
}

export default UseRefExample