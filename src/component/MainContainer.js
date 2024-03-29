import { useSelector } from "react-redux";
import VideoTittle from "./VideoTittle";
import VideoBackground from "./VideoBackground";
import React from "react";


const MainCotainer =() => {
    const movies = useSelector((store) => store.movies?.playingMoviesNow)
    if(!movies) return;
    const mainMovie = movies[2]
//    console.log (mainMovie);

    const { original_title , overview , id} = mainMovie; 

    return (
        <div className="pt-[30%] bg-black md:pt-0">
        <VideoTittle original_title = {original_title} overview = {overview}/>
        <VideoBackground movieId = {id} />

        </div>
    )
}
export default MainCotainer;
