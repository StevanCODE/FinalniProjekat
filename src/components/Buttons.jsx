import React from "react"


export const Buttons = ({ start, setStart, end, setEnd }) => {


    return (
      <div id="buttons">
        <button className="buttons" onClick={() => {
          if (start >= 24) {
            setStart(start - 24)
            setEnd(end - 24)
          }

        }}> Previous </button>
        <button className="buttons" onClick={() => {
          if (end <= 160) {
            setStart(start + 24)
            setEnd(end + 24)
          }

        }}> Next </button>
      </div>
    )
  }
