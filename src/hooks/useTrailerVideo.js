import { useEffect } from "react";
import { OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

const useTrailerVideo=()=>{
         const dispatch=useDispatch();

    const getVideo= async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/533535/videos?language=en-US', OPTION);
        const json = await data.json();
       
        const filterData=json.results.filter((movie)=>movie.type=="Trailer")
       const videoData=filterData?filterData[0]:json.results[1];
        dispatch(addTrailer(videoData));
        
       
   
     }
   
     useEffect(()=>{getVideo()},[]);

}

export default useTrailerVideo;