import { useEffect, useState } from "react";
import Button from "../components/button";

import './style.css'
import MovieCard from "../components/MovieCard/MovieCard";
import Input from "../components/Input";

function MovieListing(){

  const [movies , setMovies] = useState([]); 
  const[selectedSort , setSelectedSort] = useState('')
  const [searchQuery , setSearchQuery] = useState('')
  const [filterMovies , setFilterMovies] = useState([])
  const [loading , setLoading]= useState(false);
  const base_img_url = 'https://image.tmdb.org/t/p/original'

  async function getAllMovies(){
    setLoading(true)
    const base_url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US';
    const data = await fetch(base_url);
    const moviesList = await data.json()
    setMovies(moviesList.results) // state updated , re-render
    setFilterMovies(moviesList.results)
    setLoading(false)
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

useEffect(()=>{
     // Whenever selectedSort state will change this function will run.
     // So on the basis updated sort value we need to sort the movielist
     sortMovieList(selectedSort)
} ,  [selectedSort])


useEffect(()=>{
  // Whenever selectedSort state will change this function will run.
  // So on the basis updated sort value we need to sort the movielist
  filterMoviesList()
} ,  [searchQuery])

function filterMoviesList() {
  const updatedMovies= movies.filter((movie)=>{
    return movie.title.includes(searchQuery)
  })
  setFilterMovies(updatedMovies)
}

function filterChange(event) {
  setSelectedSort(event.target.value) // state is updating
}
function sortMovieList(type) {
 let uodatedMoviesList = [...movies]; // deep copy
 if(type ==='Descending') {
  uodatedMoviesList.sort((a,b)=> a.vote_count - b.vote_count);
 } else {
  uodatedMoviesList.sort((a,b)=> b.vote_count - a.vote_count);
 }
 setMovies(uodatedMoviesList)
}


// new code
function handleSearch(value) {
  // filterMoviesList(value)
  setSearchQuery(value) // this is needed for capturing user input
}


  return  (
    <div className="movie-container">
      <div>
        <Button buttonText='Fetch Movies' handleClick={getAllMovies}/>
      </div>
      {/* <input placeholder="Search Movies" onChange={handleSearch}/> */}
    {/*  new code */}
      <Input placeholder="Search Movies" value= {searchQuery} searchAction={handleSearch} />

      <select onChange={filterChange}>
        <option>Select</option>
        <option>Descending</option>
        <option>Ascending</option>
      </select>
   {  !loading?  <div className="movie-card-cont">
        {
          filterMovies.map((movie)=>{
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
        </div> : <div>Loading....</div>}
    </div>
  )
  
}
export default MovieListing;



// Vo hame ab lagatar age use karenge  
// Unmounting 



// Once component loaded you want to call api  (side effect)
// Once component is loaded you want to log whether compoent is visible in ui or not

// // useEffect(()=>{
//     //mounted
// } ,  [])

