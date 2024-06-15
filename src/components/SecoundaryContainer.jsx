import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecoundaryContainer=()=>{
    const movie= useSelector(store=>store.movies);
    console.log(movie.PopularMovies)
    console.log(movie.nowPlayingMovies)
    return (
    <div className=" bg-black">
        <div className="-mt-52 pl-12 relative z-20">
            
        <MovieList title={"Now Playing"} movies={movie.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={movie.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movie.PopularMovies}/>
        <MovieList title={"Upcoming"} movies={movie.nowPlayingMovies}/>
        <MovieList title={"Horror"} movies={movie.nowPlayingMovies}/></div>
        
       
        
        {/*
         
            MovieList- Popular
              -MovieCards*n
            MovieList- Now Playing
            MovieList- Trending
            MovieList- Horror
        */}
    </div>
    )
};

export default SecoundaryContainer;