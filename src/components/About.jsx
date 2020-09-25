import React from "react"
import { v4 as uuidv4 } from "uuid"


export const About = () => {
    return (
      <div id="About" key={uuidv4()}>
        <p > This is a fanmade website that showcases the lore of League of Legends </p>
        <p> Sign in to continue to the website</p>
      </div>
    )
  }
