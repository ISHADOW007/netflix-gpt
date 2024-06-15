import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
const MainContainer=()=>{
    const movies = useSelector(store=>store.movies?.nowPlayingMovies)
    if(movies==null)
        return;// early return
    const mainMovies = movies[0];
    console.log(mainMovies);
    const {original_title,overview,id}=mainMovies;
    console.log(id)
    return (
         <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground MovieId={id}/>
         </div>
    )
};

export default MainContainer;