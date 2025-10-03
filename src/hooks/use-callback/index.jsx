import { useCallback, useState } from "react";
import ListComponent from "./List";

const UseCallBackExample = () => {
    const [number, setNumber]  = useState(0)
    const [dark, setDark] =  useState(true)

    const getItems = useCallback((inc) => {
        return [number + inc, number + inc + 1, number + inc + 2]
    }, [number])

    const theme = {
        backgroundColor : dark ? 'black' : 'white',
        color :  dark ? 'white' : 'black',
    }
    return(
        <div className="" style={theme}>
            <input 
                type="number"
                className="input-custom" 
                value = {number}
                onChange={(e) => {setNumber(parseInt(e.target.value))}}
            />

            <button
                className="btn-custom"
                onClick={() => {setDark((prevDark) => (!prevDark) )}}
            >
                change theme
            </button>

            <ListComponent getItems={getItems} />
        </div>
    )
}

export default UseCallBackExample;