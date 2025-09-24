import { use, useReducer, useState } from "react"

const INIT_USERS = [];

const ACTIONS = {
    ADD : 'add', 
    DELETE : 'delete',
    MODIFY : "modify"
}

const reducer = (users, action) =>{
    switch(action.type) {
        
        case ACTIONS.ADD :
            const newUsers = {
                id : Date.now(),
                name : action.payload.name, 
                active : false
            }
    
        return [...users, newUsers];

        
        case ACTIONS.DELETE : 
            const data = users.filter((item) => item.id !== action.payload.id)
        return[...data]

        case ACTIONS.MODIFY : 
            return users.map((user) => {
                if (user.id === action.payload.id) 
                   return {...user, active : !user.active }
                return user
            })
            
    }
}

const UseReducerExample = () => {
   const [users, dispatch]  =  useReducer(reducer, INIT_USERS);
   const [name, setName] = useState('')

   const onChange = (e) => {
    setName(e.target.value)
   } 

    const onAdd = () => {
        // add
        dispatch({type : ACTIONS.ADD, payload : {name} })
    }
   
    const onModify = (id) => {
        dispatch({type : ACTIONS.MODIFY, payload : {id}})
    }
    
    const onDelete = (id) => {
        dispatch({type : ACTIONS.DELETE, payload : {id}})
    }
   return(
        <>
            <input className="input-custom" type="text" onChange = {onChange} />
            <button className="btn-custom" onClick={onAdd}>ADD</button>
            <hr />
            <div className="flex flex-col  m-3 p-4">

               
                {users.map((user, index) => (
                        <span key  = {index} className="flex p-4 gap-10">
                      
                            <p style={user.active ? {color : 'green'} : {color : 'red'}}>{user.name}</p>
                            <button className="btn-custom" onClick={() => {onModify(user.id)}}> {user.active ? "deActive" : 'active'}</button>
                            <button className="btn-custom" onClick={() => {onDelete(user.id)}}>delete</button>
                            <hr />
                        </span>
                    )
                )}
            </div>
        </>
    )
}

export default UseReducerExample