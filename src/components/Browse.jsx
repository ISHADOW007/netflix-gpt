import Header from "./Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryContainer";

const Browse =()=>{
    useNowPlayingMovies();

    return (
        <div>
        <Header/>
        <MainContainer/>
        <SecoundaryContainer/>
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