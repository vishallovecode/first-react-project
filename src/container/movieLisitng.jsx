import { useEffect, useState } from "react";
import Button from "../components/button";

import './style.css'
import MovieCard from "../components/MovieCard/MovieCard";

function MovieListing(){

  const [movies , setMovies] = useState([]);
  const base_img_url = 'https://image.tmdb.org/t/p/original'

  async function getAllMovies(){
    const base_url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US';
    const data = await fetch(base_url);
    const moviesList = await data.json()
    setMovies(moviesList.results)
  }

const callback =  ()=>{
    // this is callback function this function will only execute once when your component mounted in dom first dom
  } 

  useEffect(()=>{
    getAllMovies()
    // you can do action here , i am calling the api getAllMovies only 
    // once when componenent is moundted in dom fully

  } ,  [])

  return  (
    <div className="movie-container">
      <div>
        {/* <Button buttonText='Fetch Movies' handleClick={getAllMovies}/> */}
      </div>
      <div className="movie-card-cont">
        {
          movies.map((movie)=>{
            return (
              <MovieCard 
                title={movie.title} 
                 votes= {movie.vote_count}
                 rating={movie.vote_average}
                 imageUrl={`${base_img_url}${movie.backdrop_path}`}
                 />
            )
          })
        }
        </div>
    </div>
  )
}
export default MovieListing;

