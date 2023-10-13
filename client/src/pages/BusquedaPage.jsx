import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BusquedaPage() {
  const { busqueda } = useParams();

  const [resultados, setResultados] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`un string que no conozco ${busqueda}`)
  //     .then((response) => setResultados(response.data))
  //     .catch((error) => console.error("Error fetching videos:", error));
  // }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6 h-fit">
        <div className="font-serif text-white mx-2">
          <h1 className="text-2xl">Resultados de la busqueda: {busqueda}</h1>
          <div className="w-[70vw] my-4">
            {resultados.map((video) => {
              <LargeCardVideo
                titulo={video.titulo}
                vistas={video.vistas}
                tiempoSubido={video.tiempoSubido}
                canal={video.canal}
                descripcion={video.descripcion}
              />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function LargeCardVideo({
  miniatura,
  titulo,
  vistas,
  tiempoSubido,
  canal,
  descripcion,
}) {
  return (
    <div className="flex my-4">
      <div className="flex w-[285px] h-[160px] rounded-lg bg-white mx-4 justify-end items-start">
        {/* <img className="w-[285px] h-[160px] object-cover focus:outline-none" /> */}
        <span className="absolute bg-black opacity-90 m-2 p-1 rounded-md text-white text-sm font-serif z-30">
          20:60
        </span>
      </div>
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
