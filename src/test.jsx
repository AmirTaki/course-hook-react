import { useCallback, useEffect, useMemo, useRef, useState, useTransition } from "react"


const Test = () => {

    const api = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data  = await res.json()
        setList(data)
        setSearch(data)
    }

    useEffect(() => {
        api();
    }, [])

    const [list, setList] = useState([])
    const [search, setSearch] = useState(list)
    const [value, setValue] = useState('')
    const [ispending, TrnsitionHoock] =  useTransition()
   
    const found = (e) => {
        const {value} = e.target
        setValue(value)
        TrnsitionHoock(() => {
            setSearch( list.filter((item) => (item.name.includes(value))))
        }) 
    }
    return (
        <div  className="flex flex-col">
                <input 
                    type="text"
                    className="input-custom" 
                    value = {value}
                    onChange={found}
                />

                {ispending ? (<div>is loading .....</div>) :(

                    search.map((item) => {
                    return(
                        <div key = {item.id}>{item.name}</div>
                    )
                })) }
                
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