import { useReducer, useRef, useState } from "react"

const Test = () => {
    
    const reducer = (state, action) => {
        switch(action.type){
            case 'add' : 
            return [...state, {
                value : action.payload.value,
                active : false,
                id : Date.now()
            }]
            case "remove" : 
            return [...state.filter((item) => (item.id !== action.pyaload.id)) ]
            case "active" : 


            return [...state.map((item) => ({...item, active : item.id === action.payload.id ? !item.active : item.active}))]

        }
    }
    

    const [state, dispatch] =  useReducer(reducer, [])
    const inpuRef  =  useRef()
    return (
        <>
            <input type="text"  className="input-custom" ref  = {inpuRef}/>
            <button onClick={()=>{dispatch({type : 'add', payload : {value : inpuRef.current.value }})}} className="btn-custom">add</button>
     
            {state.map((item) => (
                <div key = {item.id} className={`flex ${item.active ? "text-green-500!" : "text-red-500!"}`}>
                    <div className="">{item.value}, {item.id}</div>
                    <button className="btn-custom" onClick={() => {dispatch({type : 'remove' , pyaload : {id : item.id}})}}>remove</button>
                    <button className="btn-custom" onClick={() => {dispatch({type : 'active' , payload : {id : item.id}})}}>{item.active ? "deActive" : "active"}</button>
                    <hr />
                </div>
            ))}
        </>
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