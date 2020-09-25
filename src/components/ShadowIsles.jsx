import React, { useState } from "react"



export const ShadowIsles = () => {

    const [images, setImages] = useState(["https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fshadow-isles-athenaeumlight.jpg&resize=:1200","https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fshadow-isles-celestialvault.jpg&resize=:1200","https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fshadow-isles-vaults.jpg&resize=:1200","https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fshadow-isles-crator.jpg&resize=:1200","https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fshadow_isles_environment_06.jpg&resize=:1200"])

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
            This cursed land was once home to a noble, enlightened civilization, known to its allies and emissaries as the Blessed Isles. However, more than a thousand years ago, an unprecedented magical cataclysm left the barrier between the material and spirit realms in tatters, effectively merging the two… and dooming all living things in an instant.

            Now, a malevolent Black Mist permanently shrouds the Isles, and the earth itself is tainted by dark sorcery. Mortals who dare to venture to these dismal shores will slowly have their life force stolen away from them, which in turn attracts the insatiable, restless spirits of the dead.

            Those who perish within the Mist are condemned to haunt this nightmarish place for eternity—worse still, the power of the Shadow Isles appears to wax stronger with every passing year, allowing the most powerful specters to roam farther and farther across Runeterra.
            </p>
        </div>
    )
}