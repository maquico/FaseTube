import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function BusquedaPage() {
  const { busqueda } = useParams();

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6 h-fit">
        <div className="font-serif text-white mx-2">
          <h1 className="text-2xl">Resultados de la busqueda: {busqueda}</h1>
          <div className="w-[70vw] my-4">
            <LargeCardVideo
              titulo="Titulo 1"
              vistas={123}
              tiempoSubido="Hace 2 días"
              canal="TheBestChannel"
              descripcion="Hola 1"
            />
            <LargeCardVideo
              titulo="Titulo 2"
              vistas={123}
              tiempoSubido="Hace 2 días"
              canal="TheBestChannel"
              descripcion="Hola 2"
            />
            <LargeCardVideo
              titulo="Titulo 3"
              vistas={123}
              tiempoSubido="Hace 2 días"
              canal="TheBestChannel"
              descripcion="Hola 3"
            />
            <LargeCardVideo
              titulo="Titulo 4"
              vistas={123}
              tiempoSubido="Hace 2 días"
              canal="TheBestChannel"
              descripcion="Hola 4"
            />
            <LargeCardVideo
              titulo="Titulo 5"
              vistas={123}
              tiempoSubido="Hace 2 días"
              canal="TheBestChannel"
              descripcion="Hola 5"
            />
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
