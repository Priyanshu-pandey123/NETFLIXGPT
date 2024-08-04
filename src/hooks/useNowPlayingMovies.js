
import { useEffect } from "react";
import { NOWPLAYINGMOVIEAPI, OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovie } from "../utils/movieSlice";


 const useNowPlayingMovie=()=>{

    const dispatch=useDispatch();

    const getnowPlayingMovie=async()=>{
    
    const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", OPTION);
    const json=await data.json();
   
    dispatch(addMovie(json.results));
    console.log(json.results);
    console.log('!st');
    
   }

   useEffect(()=>
    
    {getnowPlayingMovie()},[]);
   

     



 }

 export default useNowPlayingMovie;