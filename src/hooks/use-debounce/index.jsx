
import { useCallback, useEffect, useState } from "react";
import UseDebounce from "./useDebounce";

const UseDebounceExample = () => {
    const [value, setValue] = useState('')
    const [list, setList] = useState([])
    const debouncedValue = UseDebounce(value, 500)

    const search = useCallback(
     
            async() => {            
                const res = await fetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=40&title=${value}`)
                const json =  await res.json()
                setList(json)
            }
        , [debouncedValue])

    useEffect(() => {search()}, [debouncedValue])

    return (
        <div className="">
            <input 
                type="text" 
                value = {value}
                onChange={(e) => {setValue(e.target.value)}}
                className="input-custom"
            />
            <div className="flex items-center justify-start flex-wrap ">
                {list.map((item) => {
                    return(
                        <div key = {item.id} className="flex items-center justify-center flex-col">
                            <img src={item.images[0]} alt="" className="w-[150px]" />
                            <h3>{item.title}</h3>
                            <p>{item.price}$</p>
                        </div>
                    )
                })}
            </div>
        </div>
             
    )
}

export default UseDebounceExample;