import axios from "axios";
const baseUrl = "https://gateway.marvel.com:443/v1/public/"
"https://gateway.marvel.com:443/v1/public/characters/1?hash=8ffd6a155254bc99459933656517cf50&ts=timestamp&apikey=c37ea365e6a1a371ef21f714e01af669"

const apikey = 'c37ea365e6a1a371ef21f714e01af669'; 
const hash = '8ffd6a155254bc99459933656517cf50&ts=timestamp'; 

export default {
    marvel(url = baseUrl) {
        return {
            fetchAllComics: () => axios.get(url+"comics?hash="+hash+"&apikey="+apikey+"&limit=40"),
            fetchByIdComic: id => axios.get(url+"comics/"+ id+"?hash="+hash+"&apikey="+apikey+""),
            fetchByIdCharactersOfComic: id => axios.get(url+"comics/"+ id+"/characters?hash="+hash+"&apikey="+apikey+""),
            fetchAllCharacters: () => axios.get(url +"characters?hash="+hash+"&apikey="+apikey+"&limit=100"),
            fetchByIdCharacter: id => axios.get(url +"characters/"+ id +"?hash="+hash+"&apikey="+apikey+""),
            fetchByIdComicsOfCharacter: id => axios.get(url+"characters/"+ id+"/comics?hash="+hash+"&apikey="+apikey+"")
        }
    }
}