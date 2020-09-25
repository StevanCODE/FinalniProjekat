import React, { useEffect, useState } from "react"
import { Link, Redirect } from "react-router-dom"





export const Menu = ({ signedIn, setBodyId, bodyId }) => {
  const [championId, setChampionId] = useState("championslink")
  const [runeterraId, setRuneterraId] = useState("worldlink")


  useEffect(() => {
    signedIn === true ? setBodyId("body3") : setBodyId("body")
  }, [bodyId])
  if (signedIn === true) {
    return (
      <div>
        <div >
          <Link to="/champions"><img id="championImg" src="https://www.mobafire.com/images/champion/skins/landscape/kassadin-count.jpg" alt="kassadin"></img></Link>
          <Link id={championId} to="/champions" onMouseEnter={() => setChampionId("championslink2")} onMouseLeave={() => setChampionId("championslink")}> Champions </Link>
        </div>
        <div >
          <Link to="/world"><img id="worldImg" src="https://www.wallpapertip.com/wmimgs/20-207149_182466-title-video-game-league-of-legends-wallpaper.jpg" alt="Runeterra"></img></Link>
          <Link id={runeterraId} to="/world" onMouseEnter={() => setRuneterraId("worldlink2")} onMouseLeave={() => setRuneterraId("worldlink")}> Runeterra </Link>
        </div>
      </div>
    )
  }
  else {
    return <Redirect to="/home" />
  }
}
