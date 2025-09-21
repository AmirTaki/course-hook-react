import { useEffect, useState } from "react";

const UseEffectExampale = () => {
    const [type, setType] =  useState("products")
    const [items, setItems] = useState([])
    useEffect(() => {
        console.log(`render ${type}`)
        fetch(`https://api.escuelajs.co/api/v1/${type}`).then((res) =>
            res.json()).then((json) => {
                setItems(json)
            })
        return() => {
            console.log(`unmount ${type}`)
        }
          
    },[type])
    return(
        <div className="flex flex-col justify-center w-[100%]">
            <button 
                onClick={()=>{setType((pre)=>(setType("products")))}}
                className="btn-custom">products</button>
            <button 
                onClick={()=>{setType((pre)=>(setType("users")))}}
                className="btn-custom">users</button>

            <div className="bg-blue-200 text-gray-800 overflow-hidden">
                {type}
                {items.map((item) => {
                    return(
                        <li key = {item.id}>
                            <pre>
                                {JSON.stringify(item)}
                            </pre>
                        </li>   
                    )
                })}
            </div>
        </div>
    )
}
export default UseEffectExampale;

// https://fakeapi.platzi.com/en/rest/users

//[GET] https://api.escuelajs.co/api/v1/products