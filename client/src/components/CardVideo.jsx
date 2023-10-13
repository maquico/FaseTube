import { Link } from "react-router-dom";
import axios from "axios";
export default function CardVideo({
  id,
  nombreVideo = "",
  canal = {},
  vistas = "",
  tiempoSubido = "",
  duracion = "",
  miniatura = "",
}) {
  const miniatura_final = `https://storage.googleapis.com/fase-tube-server-bucket/${miniatura}`;
  
  // Extract channel information
  const { username, foto_ruta: profileImageUrl } = canal;

  // Get duration in seconds and format it to HH:MM:SS
  const duracionSegundos = parseInt(duracion);
  const horas = Math.floor(duracionSegundos / 3600);
  const minutos = Math.floor((duracionSegundos % 3600) / 60);
  const segundos = duracionSegundos % 60;
  const duracionFormateada = [
    horas,
    minutos > 9 ? minutos : `0${minutos}`,
    segundos > 9 ? segundos : `0${segundos}`,
  ].join(":");

  return (
    <div className="w-72 my-4 mx-2">
      {/* Miniatura */}
      <Link to={"/ver/" + id} onClick={() => watchVideo(id)}>
        <div className="flex h-44 rounded-lg bg-white justify-end items-start">
          <img className="w-full h-full rounded-lg" src={miniatura_final} alt="Miniatura" />
          <span className="absolute bg-black opacity-90 m-2 p-1 rounded-md text-white text-sm font-serif z-30">
            {duracionFormateada}
          </span>
        </div>
      </Link>

      {/* Información */}
      <div className="flex columns-2 px-1 py-4">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-purple-700">
          {profileImageUrl ? (
            <img src={profileImageUrl} alt="Foto perfil" className="w-full h-full rounded-full" />
          ) : (
            // You can set a default avatar here if the profileImageUrl is not available
            <div className="w-10 h-10 rounded-full bg-purple-700" />
          )}
        </div>
        <div className="w-60">
          <h2 className="text-white font-serif mx-2 whitespace-nowrap overflow-hidden" title={nombreVideo}>
            {nombreVideo}
          </h2>
          <p className="text-white text-opacity-60 text-sm font-serif mx-2" title={username}>
            {username}
          </p>
          <p className="text-white text-opacity-60 text-sm font-serif mx-2">
            Visitas {vistas} · Subido hace {tiempoSubido}
          </p>
        </div>
      </div>
    </div>
  );
}
const watchVideo = async (videoId) => {
  try {
    // Make a POST request to your backend to increment the view count
    const response = await axios.post('https://fase-tube-server-c537f172c3b7.herokuapp.com//api/increment-views', { video_id: videoId });
    // Handle the response if needed
    console.log('Video views updated:', response.data);
  } catch (error) {
    // Handle any errors that may occur during the request
    console.error('Error updating video views:', error);
  }
};