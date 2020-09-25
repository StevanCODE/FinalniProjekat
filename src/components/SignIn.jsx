import React, { useState } from 'react';
import {Redirect } from "react-router-dom"
import { Header } from "./Header"
import { Logo } from "./Logo"



export const SignIn = ({ users,setBodyId,setShowHeader,setsignedIn,showHeader,signedIn }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    if (showHeader === false) {
      return (
        <div>
          <form id="form" onSubmit={(e) => {
            setBodyId("body")
            setShowHeader(true)
          }}>
            <input id="username" type="text" placeholder="username" onChange={(e) => {
              setUsername(e.target.value)
            }}></input>
            <br></br>
            <input id="password" type="password" placeholder="password" onChange={(e) => {
              setPassword(e.target.value)
            }}></input>
            <br></br>
            <input id="submit" type="submit" value="Sign In" onClick={() => {
              if (users.some(el => el.name == username && el.password == password)) {
                setsignedIn(true)
                setShowHeader(true)
                console.log("True")
                
              }
            }}></input>
            <br></br>
          </form>
          <div id="div2">
            <p> Sign in to see the whole website</p>
            <p> You can sign in using the username : "admin" and password : "123"</p>
          </div>
        </div>
      )
    }
    return <Redirect to = "/menu"/>
    
  }
