import React, { useState } from "react"



export const Demacia = () => {

    const [images, setImages] = useState(["https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fdemacia-silvermere.jpg&resize=:1200", "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fdemacia-citadel.jpg&resize=:1200", "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fdemacia-hallvalor.jpg&resize=:1200", "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fdemacia-templelightbringers.jpg&resize=:1200", "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fdemacia-grandplaza.jpg&resize=:1200"])

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
                A strong, lawful kingdom with a prestigious military history, Demacia’s people have always valued the ideals of justice, honor, and duty most highly, and are fiercely proud of their cultural heritage. But in spite of these lofty principles, this largely self-sufficient nation has grown more insular and isolationist in recent centuries.

                Now, Demacia is a kingdom in turmoil.

                The capital, the Great City of Demacia, was founded as a refuge from sorcery after the nightmare of the Rune Wars, and built upon the riddle of petricite—a peculiar white stone that dampens magical energy. It is from here that the royal family has long seen to the defense of the outlying towns and villages, farmland, forests, and mountains rich with mineral resources.

                However, following the sudden death of King Jarvan III, the other noble families have not yet approved the succession of his sole heir, young Prince Jarvan, to the throne.

                Those who dwell beyond the heavily guarded borders are increasingly viewed with suspicion, and many former allies have begun to look elsewhere for protection, in these uncertain times. Some dare to whisper that the golden age of Demacia has passed, and unless its people are willing to adapt to a changing world—something many believe they are simply incapable of doing—the kingdom’s decline may be inevitable.

                And all the petricite in the land will not protect Demacia from itself.
             </p>
        </div>
    )
}