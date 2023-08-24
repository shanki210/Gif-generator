const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
    
 
  const[gif,setGif] = useState('');
  const [loading,setloading] = useState(false);

  
  

  async function fetchData(){
    setloading(true);
   
    const {data} = await axios.get(tag? url:randomurl);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setloading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  return{gif,loading,fetchData};

 
};

export default useGif;
