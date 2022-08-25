import React, { useState , useEffect} from "react";
import axios from "../AxiosRequest/axios"
import "./Row.css";
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/"

function Row ({title , fetchUrl ,isLargeRow}){

    const [movies , SetMovies] = useState([]);
    const [trailerUrl , SetTrailerUrl] = useState("");
    useEffect(()=>{
        // async allows a program to run a function without freezing the entire program. 
    async function fetchData() {
        //wait for the promise to come back 
        const request = await axios.get(fetchUrl);
        // console.log(request);
        SetMovies(request.data.results); 
        return request;
    } 
    fetchData();
    } , [fetchUrl] );

    const opts = {   height:"390px" , width:"100%" , playerVars:{ autoplay:1 }}
    
    const handleClick = (movie) =>{
        if(trailerUrl){
            SetTrailerUrl('');
        }
        else {
            movieTrailer(movie?.name || "").then(url => {
               const urlParams =  new URLSearchParams(new URL(url).search);
               SetTrailerUrl(urlParams.get('v'));
 
            }).catch(err => console.log(err));
        }
    }
    // console.table(movies)
    return (
        <div className="row">
        {/* title */}
        <h2>{title}</h2>

        {/* container -> poster  */}
        <div className="rowposters">
            {movies.map(movie=>(
                <img 
                onClick={() => handleClick(movie)}
                className={`rowposter ${isLargeRow && "rowposterLarger"} `}
                key={movie.id}
                src={`${base_url}${isLargeRow? movie.poster_path: movie.backdrop_path}`} 
                alt={movie.name} />
            ) )}
        </div>
        {trailerUrl &&  <YouTube  videoId={trailerUrl} opts={opts}/> }
        </div>
    )
}
export default Row ;