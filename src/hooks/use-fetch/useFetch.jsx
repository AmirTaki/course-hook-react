import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [data, setData] =  useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    
    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setData(json) 
                setError(false)
            })
            .catch(()=> {
                setData(null)
                setError(true)
            })
            .finally (() => setLoading(false))
    }, [url])
    
    return {data, loading, error};
}

export default UseFetch;