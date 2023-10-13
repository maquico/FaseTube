import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import LargeCardVideo from "../components/LargeCardVideo";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BusquedaPage() {
  const { busqueda } = useParams();
  const [resultados, setResultados] = useState([
    {
      video_id: 9,
      titulo: "Relax - Tenis",
      miniatura_ruta: "img1697161415295-tenis-thumbs.jpg",
      video_ruta: "vid1697161415295-tenis.mp4",
      likes: 0,
      dislikes: 0,
      vistas: 4,
      duracion: 8,
      fecha_reg: "2023-10-13T01:43:36.000Z",
      fecha_publicacion: null,
      descripcion: "Aquí chill bien makiavélico",
      user_id: 23,
      visibilidad_id: 1,
    },
  ]);

  useEffect(() => {
    axios
      .get(
        `https://fase-tube-server-c537f172c3b7.herokuapp.com/api/busqueda/?text=${busqueda}`
      )
      .then((response) => {
        console.log(response.data);
        setResultados(response.data);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, [busqueda]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6 h-fit">
        <div className="font-serif text-white mx-2">
          <h1 className="text-2xl">Resultados de la busqueda: {busqueda}</h1>
          <div className="w-[70vw] my-4">
            {resultados.map((info) => (
              <LargeCardVideo
                key={info.video_id}
                video_id={info.video_id}
                miniatura={info.miniatura_ruta}
                titulo={info.titulo}
                vistas={info.vistas}
                tiempoSubido={info.tiempoSubido}
                canal={info.canal}
                descripcion={info.descripcion}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
