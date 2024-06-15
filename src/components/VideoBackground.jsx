
import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";
const VideoBackground=({MovieId})=>{
    console.log(MovieId);
    const trailerVideo= useSelector((store)=>store.movies?.trailerVideo)
    useMovieTrailer(MovieId);      
                   
    
    return (
        <div className="w-screen ">
            <iframe 
            className="w-screen aspect-video"
            src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"}
             title="YouTube video player" 
              
             
            
            ></iframe>
        </div>
    )
}
export default VideoBackground;