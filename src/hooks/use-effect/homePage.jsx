import { useEffect } from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"


const HomePage = () => {
    useEffect(() => {
        return()=> {
            console.log("unmoun Home")
        }
    },[])
    return(
        <>
            <div className="">Home</div>
        </>
    )
}


const Page1 = () => {
    return(
        <div className="">Page1</div>
    )
}
const Page2 = () => {
    return(
        <div className="">Page2</div>
    )
}


const AppUseEffect = () => {
    return(
        <BrowserRouter>
            <div className=" flex  gap-10">
                <Link to = "/">Home</Link>
                <Link to = "/Page1">page1</Link>
                <Link to = "/Page2">page2</Link>
            </div>
            <Routes>
                <Route path = "/" element = {<HomePage />}></Route>
                <Route path = "/Page1" element = {<Page1 />}></Route>
                <Route path = "/Page2" element = {<Page2 />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppUseEffect