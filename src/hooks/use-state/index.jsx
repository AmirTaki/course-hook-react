import { useState } from "react";
import { flushSync } from "react-dom";

const UseStateExample = () => {

    const [count, setCount] =  useState(0)
    const [color, setColor] = useState(false)
    const [state, setState] = useState({
        count : 0,
        color : 'red'
    })

    const onIncrement = () => {
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount((prevCount) => (prevCount + 1))
      
        flushSync(() => setCount((prevCount) => (prevCount + 1)))

        setColor((prev) => (!prev))
        

    }

    const onDecrement = () => {
        setCount((prevCount) => (prevCount - 1))
        setCount((prevCount) => (prevCount - 1))
    
    }

    const inceremetState = () => {        
        setState({...state, count : state.count + 1, color: 'red' })
    }

    const decrementState = () => {
        setState({...state, count : state.count - 1 , color : 'white'})
    }

    console.log('render')

    return(
        <>
            {count}  
            <div className={`w-[30px] h-[30px] ${color  ? 'bg-red-500' : 'bg-blue-500'}`}></div>
            <button onClick = {onIncrement} className="btn-custom">+</button>
            <button onClick = {onDecrement} className="btn-custom">-</button>
      
            <div className="w-[50%] h-[1px] bg-amber-400"></div>

            <div className={`${state.color === 'red' ? "text-red-500" : "text-white"}`}>{state.count}</div>
            <button onClick = {inceremetState} className="btn-custom w-[100px]!">incrment</button>
            <button onClick = {decrementState} className="btn-custom w-[100px]!">decrment</button>


        </>
    )
}

export default UseStateExample;