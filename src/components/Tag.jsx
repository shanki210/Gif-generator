import { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from "./Spinner";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {


  const[tag,setTag] = useState('');
  const[gif,setGif] = useState('');
  const [loading,setloading] = useState(false);

  function changeHandler(event){
    setTag(event.target.value);
  }
  

  async function fetchData(){
    setloading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const {data} = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setloading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  function clickHandler(){
    fetchData();
  }

  return (
    <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl underline uppercase font-bold">
        Random {tag} Gif
      </h1>
      {
        loading?(<Spinner/>):(<img src={gif} width="450px"/>)
      }

      <input 
        className="w-9/12 bg-white text-lg py-2 rounded-lg mb-[6px] text-center"
        onChange={changeHandler}
      />
      
      <button 
      className="w-9/12 bg-white text-lg py-2 rounded-lg mb-[15px] "
      onClick={clickHandler}>
        Generate
      </button>
    </div>
  );
}
