import { useEffect, useLayoutEffect } from "react";

const UseLayoutEffectExample = () => {

    useEffect(() =>{
        const element = document.getElementById("input")
        setTimeout( () => {
            element.value  = 'effect'
            console.log(element.value)
        },1000)
    })

    useLayoutEffect(() => {
        const element = document.getElementById("input")
        element.value  = 'layoutEffect'
        console.log(element.value)
    })
    return(
        <>
            <input type="text" id = 'input' className="input-custom"/>
        </>
    )
}

export default UseLayoutEffectExample;