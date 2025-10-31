import React from 'react'
import { useParams ,Link,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import story1 from "../assets/story_pic1.png";
import story2 from "../assets/story_pic2.png";
import story3 from "../assets/story_pic3.png";


function Viewstory() {
  const { id ,tot} = useParams();
  const [storydata, setStorydata] = useState(null);
  const imageMap = {
    "src/assets/story_pic1.png": story1,
    "src/assets/story_pic2.png": story2,
    "src/assets/story_pic3.png": story3
  };
  const navigate=useNavigate();

useEffect(
  ()=>
  {
    fetch(`http://localhost:3001/story/${id}`)
    .then((res)=>{
      if (!res.ok) {
        throw new Error(`Story not found (${res.status})`);
      }
      return res.json();
    })
    .then((data)=>setStorydata(data))
    .catch((err)=>console.error("Error fetching story:",err))
  },[id]);
if(id>tot || id<=0)
{
  navigate('/');
}

  return (
    <div>
       {
      storydata ? (
        <div className="d-flex justify-content-center align-items-center">
         
         <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i className="bi bi-arrow-left-circle-fill"></i></Link>
          <img 
            src={imageMap[storydata.story_pic]} 
            alt="story" 
            className="max-w-full max-h-full object-contain"
          />
           <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i className="bi bi-arrow-right-circle-fill"></i></Link>
        </div>
      ) : (
        <div className="w-screen h-screen flex items-center justify-center bg-black text-white">
          Loading...
        </div>
      )}
    </div>
  )
}
export default Viewstory
