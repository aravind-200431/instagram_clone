import React, { useState, useEffect } from 'react';

function Suggestion() {
  const [profile, setprofile] = useState(null);
  const [suggestion, setsuggestion] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/profile")
      .then((res) => res.json())
      .then((data) => setprofile(data))
      .catch((err) => console.error("Error fetching profile:", err));

    fetch("http://localhost:3002/suggestions")
      .then((res) => res.json())
      .then((data) => setsuggestion(data))
      .catch((err) => console.error("Error fetching suggestions:", err));
  }, []);

  return (
    <div>
      <div className="suggestions">
        {profile && (
          <div className="d-flex">
            <img className="dp rounded-circle" src={profile.profile_pic} alt="User profile" />
            <h5>{profile.username}</h5>
            <small className="ms-auto text-primary">switch</small>
          </div>
        )}

        <div className="d-flex">
          <p>Suggested for you</p>
          <b className="ms-auto">See All</b>
        </div>

        {suggestion.length > 0 ? (
          <div>
            {suggestion.map((suggest) => (
              <div key={suggest.id} className="d-flex mb-2">
                <img className="dp rounded-circle" src={suggest.profile_pic} alt="Suggestion profile" />
                <div>
                  <h6>{suggest.username}</h6>
                </div>
                <small className="ms-auto text-primary">Follow</small>
              </div>
            ))}
          </div>
        ) : (
          <p>No suggestions available</p>
        )}
      </div>
    </div>
  );
}

export default Suggestion;
