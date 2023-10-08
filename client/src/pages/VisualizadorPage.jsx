import { useParams } from "react-router-dom";
import { HandThumbsUp, HandThumbsDown } from "react-bootstrap-icons";
import RelatedVideo from "../components/RelatedVideo";

export default function VisualizadorPage() {
  const { video } = useParams();

  return (
    <div className="flex columns-3">
      {/* Columna invisible */}
      <div className="w-20" />

      {/* Video */}
      <div className="w-[971px]">
        {/* Visualizador */}
        <div className="w-[871px] h-[490px] bg-zinc-300 rounded-xl"></div>
        <hr className="my-1 invisible" />

        {/* Interactividad */}
        <div className="w-[871px] h-24">
          <h1 className="font-serif text-white text-2xl">Nombre del vídeo</h1>
          <hr className="my-1 invisible" />
          <div className="flex w-full columns-4">
            {/* Canal */}
            <div className="w-10 h-10 rounded-full bg-purple-700"></div>
            <div className="w-1/5 mx-3">
              <h2 className="font-serif text-white whitespace-nowrap overflow-hidden">
                Nombre del canal
              </h2>
              <p className="font-serif text-white opacity-50 text-xs">
                1,000 subs
              </p>
            </div>

            {/* Botón de suscripción */}
            <div className="flex">
              <button className="bg-purple-700 rounded-full px-4 font-serif text-white">
                Suscribirse
              </button>
            </div>

            {/* Botón de like */}
            <div className="flex ml-auto">
              <div className="w-28 h-10 bg-violet-900 bg-opacity-30 rounded-2xl border-2 border-zinc-300 border-opacity-30 flex items-center px-3">
                <HandThumbsUp color="white" />
                <p className="text-white font-serif mx-1">234</p>
                {/* <div className="w-10 rotate-90 border ml-auto"></div> */}
                <HandThumbsDown color="white" className="ml-auto" />
              </div>
            </div>
          </div>
        </div>

        <hr className="my-1 invisible" />

        {/* Detalles del vídeo */}
        <div className="w-[871px] h-16 bg-violet-900 bg-opacity-50 rounded-lg px-4 py-2">
          <p className="text-white font-serif">
            123 visualizaciones · Subido el 2 de octubre de 2023
          </p>
          <p className="text-white font-serif">Descripción</p>
        </div>

        <hr className="my-3 invisible" />

        {/* Comentarios */}
        <div className="w-[871px] h-24">
          <h2 className="font-serif text-white text-2xl">Comentarios</h2>

          {/* Añadir comentario */}
          <div className="flex columns-3 my-2">
            <div className="w-10 h-10 rounded-full bg-purple-700"></div>
            <input
              type="text"
              placeholder="Añade tu comentario"
              className="bg-transparent text-white border-b-2 w-[700px] mx-4 focus:outline-none font-serif"
            />
            <button className="bg-purple-700 rounded-full px-4 font-serif text-white">
              Comentar
            </button>
          </div>

          {/* Comentarios publicados */}
          <div className="my-4">
            <Comentario
              canal="Canal A"
              comentario="Me gusta la carne, la leche y el pan.Me gusta la carne, la leche y el panMe gusta la carne, la leche y el panMe gusta la carne, la leche y el panMe gusta la carne, la leche y el panMe gusta la carne, la leche y el panMe gusta la carne, la leche y el panMe gusta la carne, la leche y el panMe gusta la carne, la leche y el pan"
            />
            <Comentario
              canal="Canal B"
              comentario="El más inteligente de su casa (vive solo)"
            />
            <Comentario
              canal="Canal C"
              comentario="No dejes que nadie arruine tu día. Es TU DÍA; arruínalo tú mismo"
            />
          </div>
          <hr className="my-10 invisible" />
        </div>
      </div>

      {/* Recomendados */}
      <div className="w-96">
        <div className="font-serif text-white text-2xl mx-2">
          <h1>Video relacionados</h1>
          <RelatedVideo />
          <RelatedVideo />
          <RelatedVideo />
        </div>
      </div>
    </div>
  );
}

const Comentario = ({ canal, comentario }) => {
  return (
    <div className="w-full flex columns-2 my-4 mx-2">
      <div className="w-10 h-10 rounded-full bg-purple-700"></div>
      <div className="w-[700px] font-serif text-white mx-2">
        <p>{canal}</p>
        <p className="opacity-60">{comentario}</p>
      </div>
    </div>
  );
};
