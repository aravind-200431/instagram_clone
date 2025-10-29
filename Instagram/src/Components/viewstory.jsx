import React from 'react'
import { useParams } from 'react-router-dom'
import

function Viewstory() {
  const { id } = useParams();
  const [storydata, setStorydata] = useState(null);
  
  return (
    <div>
       viewstory {id}
    </div>
  )
}

export default Viewstory
