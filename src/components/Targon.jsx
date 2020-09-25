import React, { useState } from "react"



export const Targon = () => {

    const [images, setImages] = useState(["https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fmttargon-caverns-of-stone.jpg&resize=:1200","https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fmttargon-ancient-thresholds.jpg&resize=:1200","https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fmttargon-four-seasons.jpg&resize=:1200","https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fmttargon-seasonal-migration.jpg&resize=:1200","https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fmttargon-divine-carvings.jpg&resize=:1200"])

    const [scroll, setScroll] = useState(2)


    return (
        <div className="LoreDiv">

            <img className="loreImg" src={images[scroll]} alt="freljordimage"></img>
            <div className="LoreButtons">
                <button onClick={() => {
                    scroll >= 1 ? setScroll(scroll - 1) : setScroll(4)
                }}> Previous </button>

                <button onClick={() => {
                    scroll <= 3 ? setScroll(scroll + 1) : setScroll(0)
                }}> Next </button>
            </div>
            <p className="Lore">
            To better understand Runeterra, one might start in the western highlands of Shurima, where legends of the world’s creation often begin…

            Like any place of myth, the land of Targon is a beacon to dreamers, pilgrims, and seekers of truth and enlightenment, such as the hardy tribes of the Rakkor who call the mountains home. Mount Targon itself is the mightiest peak in Runeterra—a towering pinnacle of twisted, sun-baked rock that seems to reach ever upward toward the stars.

            For millennia, mortals have been drawn to climb Mount Targon, even though they cannot always explain why, and the ascent is known to be all but impossible.

    </p>


        </div>
    )
}