import './App.css';
import {useEffect, useState} from "react";
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function App() {
  const [images, setImages]= useState([]);
  useEffect(() => {
    const fetchUser = async ()=>{
      const res = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=1000");
      console.log(res);
      setImages(res.data)
    }
    fetchUser();
   }, []);
  return (
    <div className="App">
      {images.map((image)=>{
        return (
          <LazyLoadImage
          effect="blur"
          src={`https://picsum.photos/200/350?random=${image.id}`} 
          alt="noImg" 
          key={image.id}
          height="200px"
          width="100%"  
          className='img'
          />
        )
      })}
    </div>
  );
}

export default App;
// //url=https://jsonplaceholder.typicode.com/photos?_limit=100
//https://picsum.photos/200/350?random=${id}