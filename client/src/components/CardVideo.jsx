import { Link } from "react-router-dom";

export default function CardVideo({
  id,
  nombreVideo = "",
  canal = "",
  vistas = "",
  tiempoSubido = "",
  duracion = "",
  miniatura = "",
}) 
{
  const miniatura_final = `https://storage.googleapis.com/fase-tube-bucket/${miniatura}`;
  return (
    <div className="w-72 my-4 mx-2">
      {/* Miniatura */}
      <Link to={"/ver/" + id}>
        <div className="flex h-44 rounded-lg bg-white justify-end items-end">
          <img className="w-full h-full rounded-lg" src={miniatura_final} alt="My Image"/>
          <span className="absolute bg-black opacity-90 m-2 p-1 rounded-md text-white text-sm font-serif z-50">
            {duracion}
          </span>
        </div>
      </Link>

      {/* Información */}
      <div className="flex columns-2 px-1 py-4">
        <div className="w-10 h-10 rounded-full bg-purple-700" />
        <div className="w-60">
          <h2
            className="text-white font-serif mx-2 whitespace-nowrap overflow-hidden"
            title={nombreVideo}
          >
            {nombreVideo}
          </h2>
          <p
            className="text-white text-opacity-60 text-sm font-serif mx-2"
            title={canal}
          >
            {canal}
          </p>
          <p className="text-white text-opacity-60 text-sm font-serif mx-2">
            {vistas} ·{/* alt + 250 */} {tiempoSubido}
          </p>
        </div>
      </div>
    </div>
  );
}
