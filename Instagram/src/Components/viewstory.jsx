import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'

function Viewstory() {
  const { id } = useParams();
  const [storydata, setStorydata] = useState(null);
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


  return (
    
    <div>
       {
      storydata?<div>{storydata.user.username}</div> : <div>Loading...</div>
       }
    </div>
  )
}
export default Viewstory
