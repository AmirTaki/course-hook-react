import { useEffect, useState, useTransition } from "react";


const UseTransitionExample = () => {
    
    const [name, setName] =  useState('')
    const [list, setList] = useState([])
    const [searchName, setSearchName] = useState(list)
    const [isPending, startTransiton] = useTransition()

    useEffect(() => {
        api()
    }, [])

    const api =  async() => {
        await fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()).then(json => {setList(json),setSearchName(json)})
    } 


    const search = (e) => {
        setName(e.target.value)
        startTransiton(() => {
            setSearchName(list.filter((item) => item.name.includes(e.target.value)))
        })
    }
    return(
        <div>
            <input 
                type="text"
                onChange={search}
                value = {name}
                className="input-custom" 
            />
            {isPending ? (<div>"loading ...."</div> ): (
                searchName.map((item) => (
                    <div key = {item.id}>{item.name}</div>
                ))
            )}
            
        </div>
    )
}

export default UseTransitionExample;