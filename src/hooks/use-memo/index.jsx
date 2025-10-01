import { useMemo, useState } from "react"

const UseMemoExample = () => {
    
    const [number, setNumber] =  useState('')
    
    const [dark, setDark] = useState(false);

    const doubleNumber = useMemo(() => {
        for(let i  = 0 ; i < 1000000000 ; i++){}
        return number * 2
    },[number])
    
    return(
        <div className={`flex flex-col ${dark ? "bg-blue-900 text-white" : "bg-[silver] text-black"}`}>

            <input
                className="input-custom"
                type="number"
                value = {number}
                onChange={(e) => {setNumber(parseInt(e.target.value))}}
            />

            <button className="btn-custom" onClick={() => {setDark((preDark) => (!preDark) )}}>chagne theme</button>

            <div className="">number : {number}</div>
            <div className="">doubleNumber : {doubleNumber}</div>
        </div>
    )
}

export default UseMemoExample