import { useDispatch,useSelector} from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../src/utils/constants";
import { addNowPlayingMovies } from "../src/utils/moviesSlice";

const useNowPlayingMovies = () => {
  //Fetch Data from TMDB API AND UPDATE STORE
  const dispatch = useDispatch();
  const nowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies)

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const json = await response.json();
      
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
   // memomization reduce lots api call
   !nowPlayingMovies && getNowPlayingMovies();
  }, [dispatch]); // Including dispatch in the dependency array
};

export default useNowPlayingMovies;
