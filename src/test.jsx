import { useEffect, useRef, useState } from "react"

const Test = () => {
    const [name, setName] = useState('')
    const [conter, setConter] = useState(0)
    const conterRef =  useRef(0)
    const inputRef = useRef(null)
    const previesRef = useRef('')

    // useEffect(() => {
    //     setConter(conter + 1);
    // }, [name])

    useEffect(() => {
        conterRef.current += 1
    },[name])

    useEffect(() => {
        previesRef.current = name
    }, [name])
    return (
        <div className="flex flex-col m-10">
            <input 
                type="text" 
                className="input-custom" 
                onChange={(e) => {setName(e.target.value)}}
                ref = {inputRef}
            />

            <div className="">name is :  {name}</div>
            <div className="">previes name is :  {previesRef.current}</div>
            <div className="">conter is : {conter}</div>
            <div className="">ref Conter : {conterRef.current}</div>




            <button 
                className="btn-custom my-4"
                onClick={() => {
                    inputRef.current.style.backgroundColor = 'white'
                    inputRef.current.style.color = 'black'
                }}
            >click change input</button>
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