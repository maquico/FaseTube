import { UserButton } from "@clerk/clerk-react"
import { useState, useEffect } from "react"
import axios from "axios"

const ProtectedPage = () => {
  const [videoInfo, setVideoInfo] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
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
  return (
    <>
    <UserButton />
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
    </>
  )
}

export default ProtectedPage 