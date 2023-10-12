import { Link, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { PencilSquare } from "react-bootstrap-icons";

export default function CanalPage() {
  const { canal } = useParams();

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6">
        {" "}
        {/* Canal */}
        <div className="flex w-[90wv] columns-2 mx-6 my-8">
          <div className="flex w-[163px] h-[163px] bg-purple-700 rounded-full mx-6" />
          <div className="font-serif text-white">
            <br />
            <h1 className="text-3xl">TheBestChannel</h1>
            <p className="text-xl">ID: {canal}</p>
            <p className="text-xl">Usuario: </p>
            <p>Descripción: </p>
          </div>
        </div>
        {/* Menu */}
        {/* <div className="flex w-[90wv] columns-3 mx-6 my-8 text-purple-700 font-serif text-lg">
          <div className="w-[163px] mx-6 flex justify-center items-center">
            <p className="py-2">Vídeos</p>
          </div>
          <div className="w-[163px] mx-6 flex justify-center items-center">
            <p className="py-2">Acerca</p>
          </div>
        </div> */}
        {/*  */}
        <div className="flex flex-wrap w-[90wv] columns-3 mx-6 text-white font-serif">
          <CanalCardVideo />
          <CanalCardVideo />
          <CanalCardVideo />
          <CanalCardVideo />
          <CanalCardVideo />
          <CanalCardVideo />
        </div>
      </div>
    </div>
  );
}

function CanalCardVideo() {
  return (
    <div className="w-72 my-2 mx-1">
      <Link>
        <div className="flex h-44 rounded-lg bg-white justify-end items-start">
          <span className="absolute bg-black opacity-90 m-2 p-1 rounded-md text-white text-sm font-serif z-30">
            12:45
          </span>
        </div>
      </Link>
      <div className="flex columns-2 px-1 py-3">
        <div className="w-full">
          <h3 className="text-lg">Nombre del vídeo</h3>
          <p className="text-sm text-opacity-60">123 vistas · Hace 1 mes</p>
        </div>
        <div className="flex items-center bg-purple-900 m-2 p-2 rounded-lg">
          <PencilSquare size={20} color="white" />
        </div>
      </div>
    </div>
  );
}
