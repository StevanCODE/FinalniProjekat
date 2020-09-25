import React from "react"
import {Link} from "react-router-dom"



export 
const ShowChampions = ({champions}) => {
  return (
    champions.map(el => {
      return (
        <div id="div1" key={el.id}>
          <p id="name"> {el.name} </p>
          <Link to={`/champions/${el.id}`}><img src={`icons/${el.image.full}`} alt={el.image.full}></img></Link>
        </div>
      )
    })
  )
}