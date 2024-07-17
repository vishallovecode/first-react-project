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
    setMovies(moviesList.results) // state updated , re-render
  }

  // getAllMovies() this will cause infinite api call because you are updating state inside this function  
  // updating the state cause the re-render the component  , re-render the component wille execute line no 19
  // which will call function again  that function updating the state again  , updating state will re-render the compoenent again\
  // so on....

// How to know mouning is done  

useEffect(()=>{
  // HERE IF YOU ARE THAT MEANS YOUR COMPONENT IS MOUNTED , OR FIRST TIME RENDER IN UI 
  // SO If you want than you can get data from api 
  // here you will come only one time throught the lifecycle of compoennt

  console.log(' mE AAA gYA')
  getAllMovies()
} ,  [])

  return  (
    <div className="movie-container">
      <div>
        <Button buttonText='Fetch Movies' handleClick={getAllMovies}/>
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

