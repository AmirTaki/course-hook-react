import { useDeferredValue } from "react";
import { useEffect, useMemo, useState } from "react";

const UseDeferredValueExample = () => {
    const api = async () => {
        const  response = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await response.json()
        setList(data)
    }
    useEffect(() => {
        api()
    }, [])
    
    const [name, setName] = useState('')
    const [list, setList] = useState([])
    const deferredValue = useDeferredValue(name)

    const handleChange = (e) => {
        const {value} = e.target
        setName(value)
    }

    const search = useMemo(() => {
       return  list.filter((item) => item.name.includes(name))
    }, [deferredValue])

    return(
        <div className="">
            <input 
                type="text" 
                className="input-custom"
                value = {name}   
                onChange={handleChange}
            />
            {search.map((item) => {
                return(
                    <div key = {item.id}> {item.name} </div>
                )
            })}  
        </div>
    )
}
export default UseDeferredValueExample;