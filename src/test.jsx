import { use, useEffect, useState } from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"



const HomePage = () => {
    useEffect(()=> {
        return() => {
            console.log('un mount home page')
        }
    })
    return(
        <div className="bg-blue-500">
            <h1>home </h1>
        </div>
    )
}
const Page1 = () => {
    return(
        <>
            <h1> page 1</h1>
        </>
    )
}
const Page2 = () => {
    return(
        <>
            <h1> page 2</h1>
        </>
    )
}

const Test = () => {
    
    return (
        <>
            <BrowserRouter>
                <div className="flex flex-row bg-amber-900">
                    <Link to = "/home">home</Link>
                    <Link to = "/page1">page1</Link>
                    <Link to = "/page2">page2</Link>
                </div>
      

                <Routes>
                    <Route path = "/home" element = {<HomePage />}></Route>
                    <Route path = "/page1" element = {<Page1 />}></Route>
                    <Route path = "/page2" element = {<Page2 />}></Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}
export default Test