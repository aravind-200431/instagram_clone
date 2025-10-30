import React, { useState, useEffect } from 'react';

function Stories() {
  const [story, setstory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/story")
      .then((res) => res.json())
      .then((data) => setstory(data))
      .catch((err) => console.error("Error fetching stories:", err));
  }, []);

  return (
    <div className="story d-flex">
      {story.length > 0 ? (
        <div className="d-flex">
          {story.map((s) => (
            <div key={s.id} className="mx-2 text-center">
              <img
                className="gradient-border rounded-circle p-1"
                src={s.user.profile_pic}
                alt="dp"
              />
              <p className="text-truncate" style={{width:50}}>{s.user.username}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No stories available</p>
      )}
    </div>
  );
}

export default Stories;
