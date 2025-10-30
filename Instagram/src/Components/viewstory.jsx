import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'

function Viewstory() {
  const { id } = useParams();
  const [storydata, setStorydata] = useState(null);
useEffect(
  ()=>
  {
    fetch(`http://localhost:3002/story/${id}`)
    .then((res)=>res.json())
    .then((data)=>setStorydata(data))
    .catch((err)=>console.error("Error fetching story:",err))
  },[id]);


  return (
    
    <div>
       {
      storydata?<div><img src={storydata.story_pic} alt='story' /></div> : <div>Loading...</div>
       }
    </div>
  )
}
export default Viewstory
