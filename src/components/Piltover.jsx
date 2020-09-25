import React, { useState } from "react"



export const Piltover = () => {

    const [images, setImages] = useState(["https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fpiltover-entrancetreasury.jpg&resize=:1200", "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fpiltover_environment_01.jpg&resize=:1200", "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fpiltover_culture_03.jpg&resize=:1200", "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fpiltover_culture_01.jpg&resize=:1200", "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fpiltover-zindeloruneterra.jpg&resize=:1200"])

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
                Piltover is a thriving, progressive city whose power and influence is on the rise. It is Valoran’s cultural center, where art, craftsmanship, trade and innovation walk hand in hand. Its power comes not through military might, but the engines of commerce and forward thinking. Situated on the cliffs above the district of Zaun and overlooking the ocean, fleets of ships pass through its titanic sea-gates, bringing goods from all over the world. The wealth this generates has given rise to an unprecedented boom in the city’s growth. Piltover has - and still is - reinventing itself as a city where fortunes can be made and dreams can be lived. Burgeoning merchant clans fund development in the most incredible endeavors: grand artistic follies, esoteric hextech research, and architectural monuments to their power. With ever more inventors delving into the emergent lore of hextech, Piltover has become a lodestone for the most skilled craftsmen the world over.
    </p>


        </div>
    )
}