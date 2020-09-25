import React from "react"
import { Link } from "react-router-dom"


export const Map = () => {
    return (
        <div id="mapDiv">
            <img id="mapImg" src="https://images.squarespace-cdn.com/content/v1/5987c7c637c5815a82246bc4/1567839449842-3ZOAAJ49T17EL1ZHUQIO/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/RuneterraMap.jpg?format=1500w" alt="runeterra map"></img>

            <Link to="/freljord" id="Freljord"> Freljord </Link>
            <Link to="/noxus" id="Noxus"> Noxus </Link>
            <Link to="/piltover" id="Piltover"> Piltover </Link>
            <Link to="/zaun" id="Zaun"> Zaun </Link>
            <Link to="/ionia" id="Ionia"> Ionia </Link>
            <Link to="/demacia" id="Demacia"> Demacia </Link>
            <Link to="/shadowIsles" id="ShadowIsles"> Shadow Isles </Link>
            <Link to="/targon" id="Targon"> Targon </Link>
            <Link to="/shurima" id="Shurima"> Shurima </Link>
            <Link to="/bilgewater" id="Bilgewater"> Bilgewater </Link>


        </div>
    )
}