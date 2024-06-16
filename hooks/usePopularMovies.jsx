import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../src/utils/constants";
import { addPopularMovies } from "../src/utils/moviesSlice";

const usePopularMovies = () => {
   //Fetch Data from TMDB API AND UPDATE STORE
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const json = await response.json();
      
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, [dispatch]); // Including dispatch in the dependency array
};

export default usePopularMovies;
;