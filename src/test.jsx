import { useEffect, useMemo, useRef, useState } from "react"

const Test = () => {
    const [dark, setDark] = useState(false) 
    const [number, setNumber] = useState(0)
    
    const doubleNumber = useMemo(() => {
        for(let i = 0 ; i < 1000000000; i++){
        }
        return number * 2
    }, [number]) 


    return (
        <div className={`flex flex-col ${dark ? "bg-gray-300" : "bg-black"}`}>
            <input 
                type="number" 
                className={`input-custom ${dark ? "bg-white text-black!" : "bg-black text-white"}`} 
                onChange={(e) => {setNumber(e.target.value)}}
            />
            <button 
                className="btn-custom"
                onClick={() => {setDark((prevDark) => (!prevDark))}}    
            >theme chagne</button>

            <div className={`${dark ? "text-white " : "text-blue-800"}`}>{number}</div>
            <div className={`${dark ? "text-white " : "text-blue-800"}`}>{doubleNumber}</div>
        </div>
    )
}
export default Test



/*

    const reducer = (state, action) => {
      
        switch(action.type){
            case "add" : 
            return [...state,    {status : false, value : action.payload.data, id : Date.now()}]
            
            case 'remove' : 
            return[...state.filter((item) => (item.id !== action.payload.id))]
            
            case "status" : 
       
            return[...state.map((item) => ({...item, status : item.id === action.payload.id ? !item.status : item.status}))]
        }

    }    const reducer = (state, action) => {
      
        switch(action.type){
            case "add" : 
            return [...state,    {status : false, value : action.payload.data, id : Date.now()}]
            
            case 'remove' : 
            return[...state.filter((item) => (item.id !== action.payload.id))]
            
            case "status" : 
       
            return[...state.map((item) => ({...item, status : item.id === action.payload.id ? !item.status : item.status}))]
        }

    }
*/