import React, {useState , useEffect} from 'react'
import axios from "../AxiosRequest/axios"
import requests from "../AxiosRequest/request";
import "./Banner.css";

function Banner() {

const [movies , SetMovies] = useState([]);
useEffect(()=>{
async function fetchData(){
    const request = await axios.get(requests.fetchNetflixOriginals);
    // console.log(request)
    const OnlyOne = Math.floor(Math.random() * request.data.results.length-1);
    SetMovies(request.data.results[OnlyOne]);
    return request;
    //is mein hamre pas multiple mily gye , but we only want one 
    //it will be look like this [..,..,..,..] but we only want one
}
fetchData();
} , []);
console.table(movies);
function truncate (str, n){
    return str?.length > n ? str.substr (0, n-1) + "..." : str ;
}

const banner = {backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
backgroundSize:"cover" , backgroundPosition:"center center" };

  return (
    //  {/* Background img */}
    <div className='banner' style={banner}>
        <div className='banner_content' >
      {/* title */}
      <h1 className='banner_title'>{movies?.title || movies?.nane || movies?.original_name }</h1>
          {/* div > 2 buttons */}
     < div className='banner_buttons '>
        <button className='banner_button'> Play</button>
        <button className='banner_button'> My List</button>
     </div>
     {/* description */}
     <h1 className='banner_description'>{ truncate( movies?.overview , 150 )}</h1>
      </div>
      <div className='banner_fadeBottom'>

      </div>
    </div>

  )
}
export default Banner
