import { useEffect, useState } from "react";

const ListComponent = ({getItems}) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        console.log(getItems)
        console.log( 'render Items : ',items)
        setItems(getItems(5))
    }, [getItems])

    return(
        <div className="">
            {items.map((item) => (
                <div key = {item} className="">{item}</div>
            ))}
        </div>
    )
}

export default ListComponent;