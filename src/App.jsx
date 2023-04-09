import { useState,useEffect } from 'react'
import './app.css'
import SearchIcon from './search.svg'
import Moviecard from './moviecard'

const api_url = 'http://www.omdbapi.com?apikey=de8c2252'

const movie1 = {
  "Title": "Batman v Superman: Dawn of Justice",
  "Year": "2016",
  "imdbID": "tt2975590",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const movie2 = {
  "Title": "Superman Returns",
  "Year": "2006",
  "imdbID": "tt0348150",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
}


function App() {

  const searchMovies = async (title)=> {
    const response = await fetch(`${api_url}&s=${title}`)
    const data = await response.json();
    Setmovies(data.Search)
  }

  const [Searchterm,Setsearchterm] = useState([])

  useEffect(()=>{
    searchMovies('Superman');
  },[])

  const [movies,Setmovies] = useState([]);

  return (
    <div className="app">
      <h1>GoMovies</h1>

      <div className = "search">
        <input 
          placeholder = "Search"
          value = {Searchterm}
          onChange = {(e)=>Setsearchterm(e.target.value)}
        />
        <img
          src = {SearchIcon}
          alt="search"
          onClick={()=>searchMovies(Searchterm)}
        />
        </div>
        {
          movies?.length>0 ? (
            <div className = "container">
              {movies.map((movies)=>(
                <Moviecard movie={movies}/>
              ))}
            </div>
          ) : 
          (
            <div className = "empty">
              <h2>No movies found</h2>
            </div>
          )
        }
        
    </div>
  );
}

export default App;
