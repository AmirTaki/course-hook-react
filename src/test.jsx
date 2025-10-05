import { useCallback, useEffect, useMemo, useRef, useState } from "react"


const Test = () => {

    const [number, setNumber] = useState('')
    const [dark, setDark] = useState(true)

    const getItems = useCallback((inc) => {
        return [number, number * inc, number * inc + 1 ]
    }, [number])

    const Theme =  {
        backgroundColor  : dark ? 'black' : "white",
        color : dark ? 'white' : 'black'
    }
    return (
        <div style={Theme} className="flex flex-col">
            <input 
                type="number" 
                className="input-custom" 
                onChange={(e) => {setNumber(e.target.value)}}
            />

            <button onClick={() => {setDark((preDark) => (!preDark))}} className="btn-custom">changeTheme</button>
            <div className="">number :  {number}</div>

            <LinkTe  getItems={getItems}/>
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