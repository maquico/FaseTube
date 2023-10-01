import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

function App() {
  const [videoInfo, setVideoInfo] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [user, setUser] = useState({});

  async function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject)
    setUser(userObject);

    const email = userObject.email;
    const username = `@${email.split('@')[0]}`;

    const response2 = await axios.post('http://localhost:3001/api/users/sign_in', {
      username: username,
      nombres: userObject.given_name,
      apellidos: userObject.family_name,
      corrreo: userObject.email,
    });

    console.log(response2)

    document.getElementById('signInDiv').hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById('signInDiv').hidden = false;
  }

  // Define a function to fetch a video by ID
  const getVideoById = async (videoId) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/videos/${videoId}`);
      const fetchedVideo = response.data;
      setVideoInfo(fetchedVideo);
      setShowVideo(true);
      console.log('Video fetched successfully!')
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  };

  // Fetch a video when the component mounts
  useEffect(() => {
    getVideoById(1); // Replace '1' with the actual video ID you want to fetch
  }, []);

  // Initialize the Google One Tap sign-in button
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '473950880318-7nnlmghonf59oqdfn0c39jfk9q813qf8.apps.googleusercontent.com',
      callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {theme : "outline", size : "large"}
    );

    google.accounts.id.prompt();
  }, []);


  return (
    <div className="App">
      <div id="signInDiv"> </div>
      {Object.keys(user).length !== 0 &&
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      }
        {user && 
        <div>
          <img alt="" src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
        }
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {showVideo && videoInfo && (
          <div>
            <h2>Video Details</h2>
            <p>Title: {videoInfo.titulo}</p>
            <p>Description: {videoInfo.descripcion}</p>
            <p>Ruta: {videoInfo.video_ruta}</p>
            <video controls>
              <source src={`http://localhost:3001/api/videos/watch/${videoInfo.video_id}`} type="video/mp4" />
              {/* You can add multiple source elements for different video formats */}
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
