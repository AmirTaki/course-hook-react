import { createContext, useContext, useState } from "react" 

const themeContext = createContext()

const Component1 = () => {
    const {theme, chengeTheme} = useContext(themeContext)
    return (
        <div className={`${theme === 'dark' ?  'text-red-500':'text-blue-500'}`}>
            <div>component one</div>
            <button onClick={chengeTheme} className="btn-custom">chengeTheme</button>
        </div>
    )
}
const Component2 = () => {
    const {theme} = useContext(themeContext)

    return (
        <div className={`${theme === 'dark' ?  'text-white':'text-black'}`}>
            component two
        </div>
    )
}

const UseContextExample = () => {
    const [theme, setTheme] =  useState('dark')
    const chengeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <div className={`${theme === 'dark' ? " bg-black" : " bg-white"} flex flex-col `}>
            <themeContext.Provider  value = {{theme, chengeTheme}}>
                <Component1 />
                <Component2 />
            </themeContext.Provider>
        </div>
    )
}


export default UseContextExample;