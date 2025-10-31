import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [profile, setProfile] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [unfollow, setUnfollow] = useState(0);

  useEffect(() => {
    axios
      .get('http://localhost:3001/profile')
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err))

    axios
      .get('http://localhost:3001/followers')
      .then((res) => setFollowers(res.data))
      .catch((err) => console.log(err))
  }, [unfollow]);
  function handleChange(e)
  {
   setProfile(prev => ({
    ...prev,
    [e.target.name]: e.target.value
   }))  }
   const handleupdate=async()=>{
    axios.put('http://localhost:3001/profile',profile)
    .then(console.log("Profile updated"))
    .catch((err)=>console.error("Error updating profile:",err))
   }
   const handleunfollow=async(id)=>
   {
    axios.delete(`http://localhost:3001/followers/${id}`)
    .then(() => alert("Unfollowed"))
    .then(() => setUnfollow(!unfollow))
    .catch((err) => console.error("Error unfollowing user:", err));
   }


  return (
    <div className='m-10'>
      {profile ? (
        <>
          <img src={profile.profile_pic} className=" profile rounded-circle " alt="profile" />
          <h5>{profile.username}</h5>
          <input type="text"
                 value={profile.username}
                 name='username'
                 className='form-control my-4'
                 onChange={handleChange}
          />
           <input type="text"
                 value={profile.profile_pic}
                 name='profile_pic'
                 className='form-control my-4'
                 onChange={handleChange}
          />
          <button className='btn btn-primary' onClick={handleupdate}>Update Profile</button>
        </>
      ) : (
        <div>Loading Profile ...</div>
      )}
      {
        followers.length > 0 && (
            followers.map((follower) => (
              <div key={follower.id} className="card my-3" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title">{follower.username}</h5>
                  <button onClick={()=>{handleunfollow(follower.id)}}>unfollow</button>
                </div>
              </div>
            ))
          )
      }
    </div>
  );
}

export default Profile;
