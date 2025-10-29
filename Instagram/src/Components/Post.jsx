import React, { useState, useEffect } from 'react';
function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err))
  }, []);

  return (
    <div>
      {posts.length >0 ? (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <div>
                <img className="" src={post.userId.profile_pic} alt="User profile" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading Posts...</div>
      )}
    </div>
  );
}


export default Post;
