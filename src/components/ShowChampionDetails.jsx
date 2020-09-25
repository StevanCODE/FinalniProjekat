import React from "react"
import { useParams } from "react-router-dom"




export   const ShowChampionDetails = ({champions}) => {
    const id = useParams().id
    console.log(id)

    return champions.filter(el => el.id == id).map(el => {
      return (
        <div key={el.id}>
          <img id="champimg" src={`/images/${el.name}_0.jpg`} alt={`images/${el.name}_0.jpg`}></img>
          <p className="champdetails"> {el.lore} </p>
        </div>
      )
    })
  }
