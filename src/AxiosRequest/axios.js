import axios from "axios";

//base url to make request to the movie database
const Instance = axios.create({
    baseURL : "https://api.themoviedb.org/3" ,
})

// instance.get('/foo-bar')
export default Instance ; 