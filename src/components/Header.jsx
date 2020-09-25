import React from "react"
import {Link } from "react-router-dom"


export const Header = ({ setBodyId, setShowHeader }) => {
    return (
        <header id="header">
            <nav id="nav1">
                <Link className="link" to="/home" onClick={() => {
                    setBodyId("body")
                    setShowHeader(true)
                }}> Home </Link>
            </nav>
            <nav id="nav2">
                <Link className="link" to="/about" onClick={() => setBodyId("body2")}> About </Link>
            </nav>
            <nav id="nav3">
                <Link className="link" to="/contact" onClick={() => setBodyId("body2")}> Contact </Link>
            </nav>
        </header>
    )
}