import CardVideo from "../components/CardVideo";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PrincipalPage() {
  const [videosInfos, setVideosInfos] = useState([]);
  
  useEffect(() => {
    // Make an Axios GET request to fetch data from the API endpoint
    axios
      .get(`https://fase-tube-server-c537f172c3b7.herokuapp.com/api/videos`)
      .then((response) => {
        setVideosInfos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  useEffect(() => {
    // Calculate tiempoSubido based on fecha_reg
    const calculateTiempoSubido = (fechaSubida) => {
      const fechaActual = new Date();
      const diferencia = fechaActual - new Date(fechaSubida);
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      
      if (dias > 30) {
        const meses = Math.floor(dias / 30);
        
        if (meses > 12) {
          const años = Math.floor(meses / 12);
          return `${años} años`;
        } else {
          return `${meses} meses`;
        }
      } else {
        return `${dias} días`;
      }
    };

    // Function to fetch channel info for a given user ID
    const getChannelInfo = async (userId) => {
      try {
        const response = await axios.get(`https://fase-tube-server-c537f172c3b7.herokuapp.com/api/canal/info/${userId}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching channel info:", error);
        return null;
      }
    };

    // Create a map to cache channel info
    const channelInfoCache = new Map();

    // Fetch channel info for each video's user ID and update the state
    const fetchChannelInfoForVideos = async () => {
      const updatedVideosInfos = await Promise.all(
        videosInfos.map(async (info) => {
          // Check if channel info is already cached
          if (channelInfoCache.has(info.user_id)) {
            const cachedInfo = channelInfoCache.get(info.user_id);
            return {
              ...info,
              username: cachedInfo ? cachedInfo.username : "Unknown",
            };
          } else {
            // Fetch and cache channel info
            const channelInfo = await getChannelInfo(info.user_id);
            channelInfoCache.set(info.user_id, channelInfo);
            return {
              ...info,
              username: channelInfo ? channelInfo.username : "Unknown",
            };
          }
        })
      );
      setVideosInfos(updatedVideosInfos);
    };

    // Call the function to calculate tiempoSubido and fetch channel info
    videosInfos.forEach((info) => {
      info.tiempoSubido = calculateTiempoSubido(info.fecha_reg);
    });
    fetchChannelInfoForVideos();
  }, [videosInfos]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6 h-fit">
        <div className="font-serif text-white text-2xl mx-2">
          <h1>Recientemente añadidos</h1>
        </div>
        <div className="flex flex-wrap">
          {videosInfos.map((info) => (
            <CardVideo
              key={info.video_id}
              id={info.video_id}
              nombreVideo={info.titulo}
              canal={info.username}
              vistas={info.vistas}
              tiempoSubido={info.tiempoSubido}
              miniatura={info.miniatura_ruta}
              duracion={info.duracion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
