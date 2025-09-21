import { useState } from "react"
import { flushSync } from "react-dom"

const Test = () => {

    const [state, setState] = useState({
        color : true,
        conter : 0
    })

    const increment = () => {
        setState(() => ({...state, conter : state.conter + 1, color: true}))
        flushSync(() => setState((prev) => ({...state, conter : state.conter + 1, color: true})))
        // setState({...state, conter : state.conter + 1, color: true})

    }
    const decrement = () => {
        setState({...state, conter : state.conter - 1, color: false})

    }

    // const [conter, setConter] =  useState (0)
    // const [color, setColor] = useState('red')
    // const increment = () => {
    //     setConter((conter) => (conter + 1))
    //     // flushSync(() => setConter((conter) => (conter + 1)))    
    //     // flushSync(() => setConter((conter) => (conter + 1))) 
    //     setColor('blue')   
    // }

    // const decrement = () => {
    //     flushSync(() =>setConter((conter) => (conter - 1)))
    //     flushSync(() =>setConter((conter) => (conter - 1)))
    //     // setConter((conter) => (conter - 1))
        
    // }
    // console.log('render')
    return (
        <>
            <div className={`${state.color ? "text-blue-500": "text-red-500"}`}>{state.conter}</div> 
            <button className="btn-custom" onClick={increment}>+</button>
            <button className="btn-custom" onClick={decrement}>-</button>
        </>
    )
}
export default Test