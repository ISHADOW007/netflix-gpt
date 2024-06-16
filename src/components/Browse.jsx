import Header from "./Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse =()=>{
    const showGptSearch = useSelector(store=> store.gpt.showGptSearch)
    useNowPlayingMovies();// these hook fetching the NowPlayingMovies upadating the store 
    usePopularMovies();// these hook fetching the PopularMovies upadating the store
    return (
        <div>
        <Header/>
        {
            showGptSearch ? (<GptSearch/>): (<><MainContainer/>  <SecoundaryContainer/></>)
        }
        
        {/* 
            MainContainer
             -VideoBackground
             -VideoTitle
            SecoundaryContainer
             -MovieList*n
              -cards*n

        */}
        </div>
        
    );
};
export default Browse;