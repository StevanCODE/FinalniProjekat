import axios from "axios"

export const getChamps = () => {
    return axios.get("http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/championFull.json")
}