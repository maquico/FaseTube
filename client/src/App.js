import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [video, setVideo] = useState(null);
  const [showVideo, setShowVideo] = useState(false); // New state variable

  // Define a function to fetch a video by ID
  const getVideoById = async (videoId) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/videos/${videoId}`);
      const fetchedVideo = response.data;
      setVideo(fetchedVideo); // Update the 'video' state with the fetched data
      setShowVideo(true); // Show the video once it's fetched
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  };

  // Fetch a video when the component mounts (you can call this function when needed)
  useEffect(() => {
    getVideoById(1); // Replace '1' with the actual video ID you want to fetch
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {showVideo && video && (
          <div>
            <h2>Video Details</h2>
            <p>Title: {video.titulo}</p>
            <p>Description: {video.descripcion}</p>
            <p>Ruta: {video.video_ruta}</p>
            <video controls>
              <source src="/uploads/videos/20secondstimer.mp4"  type="video/mp4" />
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
