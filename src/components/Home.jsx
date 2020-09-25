import React from "react"
import {Link, Redirect } from "react-router-dom"



export const Home = ({ setBodyId, setShowHeader,setsignedIn }) => {
    return (
        <nav id="nav1">
            <Link className="link" to="/home" onClick={() => {
                setBodyId("body")
                setShowHeader(true)
                setsignedIn(false)
                return <Redirect to = '/home'/>
                
            }}> Home </Link>
        </nav>
    )
}