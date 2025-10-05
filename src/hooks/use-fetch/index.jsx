//https://jsonplaceholder.typicode.com/users

import UseFetch from "./useFetch";


const UseFetchExample = () => {
    const {data, error, loading} = UseFetch("https://jsonplaceholder.typicode.com/users")
    return(
        <div>
            {loading && <h1>Loading ..... </h1>}
            {error && <p className="text-red-600">Something went wrong</p>}
            {data && (
                <ul>
                    {data?.map((item) => {
                        return(
                            <li key = {item.id}>
                                <h1>name : {item.name}</h1>
                                <p> email :{item.email}  </p>
                                <p> username : {item.username}</p>
                                <hr />
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default UseFetchExample;