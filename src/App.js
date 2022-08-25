import React from 'react';
import './App.css';
import Row from './Component/row';
import requests from "./AxiosRequest/request";
import Banner from './Component/banner';
import Navbar from './Component/navbar';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
    <Row title="NETFLIX ORIGINALS"
     isLargeRow={true}
    fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Trending Now"  fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated"  fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies"  fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies"  fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies"  fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romantic Movies"  fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentaries"  fetchUrl={requests.fetchDocumantaries}/>
    
    
    </div>
  );
}

export default App;
