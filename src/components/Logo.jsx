import React from "react"
import { Redirect} from "react-router-dom"



  export const Logo = ({signedIn,showHeader}) => {
    if (signedIn === false && showHeader === true) {
      return (
        <div>
          <img id="logo" src="lol-logo.jpg" alt="lol-logo"></img>
          <h1 id="h1">Lore Database </h1>
        </div>
      )
    }
    else {
      return <Redirect to="/home" />
    }
  }