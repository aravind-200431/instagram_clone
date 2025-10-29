import React, { useState, useEffect } from 'react';

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className='d-flex justify-content-center'>
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div  className='my-3' key={post.id}>
              <div className="d-flex">
                <img
                  className="dp rounded-circle"
                  src={post.userId.profile_pic}
                  alt="User profile"
                />
                <h5>{post.userId.username}</h5>
              </div>
              <img className="image" src={post.image} alt="Post" />
              
                <div>
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-chat"></i>
                  <i className="bi bi-send"></i>
                </div>
                <div>{post.likes} likes</div>
                <div> {post.caption}</div>
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
