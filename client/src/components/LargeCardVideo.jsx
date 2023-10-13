import { Link } from "react-router-dom";

export default function LargeCardVideo({
  video_id,
  miniatura,
  titulo,
  vistas,
  tiempoSubido,
  canal,
  descripcion,
}) {
  return (
    <div className="flex my-4">
      <Link to={"/ver/" + video_id}>
        <div className="flex w-[285px] h-[160px] rounded-lg bg-white mx-4 justify-end items-start">
          <img
            className="w-[285px] h-[160px] object-cover focus:outline-none"
            src={`https://storage.googleapis.com/fase-tube-server-bucket/${miniatura}`}
          />
          <span className="absolute bg-black opacity-90 m-2 p-1 rounded-md text-white text-sm font-serif z-30">
            20:60
          </span>
        </div>
      </Link>
      <div>
        <h2 className="text-2xl block">{titulo}</h2>
        <p>{vistas} vistas</p>
        <p>{tiempoSubido}</p>
        <p>Subido por {canal}</p>
        <p>Descripción: {descripcion}</p>
      </div>
    </div>
  );
}
