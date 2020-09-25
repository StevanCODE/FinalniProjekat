import React, { useState } from "react"



export const Ionia = () => {

    const [images, setImages] = useState(["https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fionia-life-as-one.jpg&resize=:1200", "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fionia-life-as-one.jpg&resize=:1200", "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fionia-the-placidium-of-navori.jpg&resize=:1200", "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fionia_environment_08.jpg&resize=:1200", "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fionia_culture_04.jpg&resize=:1200"])

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
                Surrounded by treacherous seas, Ionia is composed of a number of allied provinces scattered across a massive archipelago, known to many as the First Lands. Since Ionian culture has long been shaped by the pursuit of balance in all things, the border between the material and spirit realms tends to be more permeable here, especially in the wild forests and mountains.

                Although these lands’ enchantments can be fickle, its creatures dangerous and fae, for many centuries most Ionians led lives of plenty. The warrior monasteries, provincial militias—and even Ionia itself—had been enough to protect them.

                But that ended twelve years ago, when Noxus attacked the First Lands. The empire’s seemingly endless warhosts savaged Ionia, and were only defeated after many years, and at great cost.

                Now, Ionia exists in an uneasy peace. Different reactions to the war have divided the region—some groups, such as the Shojin monks or the Kinkou, seek a return to isolationist pacifism, and pastoral traditions. Other more radical factions, such as the Navori Brotherhood and the Order of Shadow, demand a militarization of the land’s magic, to create a single, unified nation that can take vengeance on Noxus.

                The fate of Ionia hangs in a delicate balance that few are willing to overturn, but all can feel shifting uneasily beneath their feet.

    </p>


        </div>
    )
}