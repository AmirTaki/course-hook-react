import { use, useDeferredValue } from "react"
import { useCallback, useEffect, useMemo, useRef, useState, useTransition } from "react"


const Test = () => {
    const api = async () => {
        try {

            await fetch('https://jsonplaceholder.typicode.com/comments').then(resp => resp.json()).then(
                res => {
                    setList(res)
                }
            )
        }
        catch(e) {
            console.log(e)
        }
    }

    useEffect(() =>{api()}, [])
    const [name, setName] =  useState('')
    const [list, setList] = useState([])
    const deferredValue =   useDeferredValue(name)
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const search = useMemo( () => {
        return list.filter((item) => item.name.includes(name))
    } , [deferredValue])
    return (
        <div  className="flex flex-col">
            <input 
                type="text" 
                className="input-custom"
                onChange={handleChange}    
                value = {name}
            />

            {search.map((item) => {
                return (
                    <div key = {item.id}> {item.name} </div>
                )
            })}
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