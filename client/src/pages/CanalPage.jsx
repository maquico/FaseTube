import { Link, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { PencilSquare, Trash, Trash2, Trash3 } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";

export default function CanalPage() {
  const { canal } = useParams();

  const [canalInfo, setCanalInfo] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://fase-tube-server-c537f172c3b7.herokuapp.com/api/canal/info/?canal_id=${canal}`
      )
      .then((response) => {
        setCanalInfo(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error("Error fetching canal:", error));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6">
        {/* Canal */}
        <div className="flex w-[90wv] columns-2 mx-6 my-8">
          <div className="flex w-[163px] h-[163px] rounded-full mx-6">
            <img src={canalInfo.foto_ruta} className="rounded-full" />
          </div>
          <div className="font-serif text-white">
            <br />
            <br />
            <h1 className="text-3xl">
              {canalInfo.nombres} {canalInfo.apellidos}
            </h1>
            <p className="text-xl">@{canalInfo.username}</p>
            {/* <p className="text-xl">Usuario: </p>
            <p>Descripción: {canalInfo.descripcion}</p> */}
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
      <div className="flex columns-3 px-1 py-3">
        <div className="w-full">
          <h3 className="text-lg">Nombre del vídeo</h3>
          <p className="text-sm text-opacity-60">123 vistas · Hace 1 mes</p>
        </div>
        {/* <button className="flex items-center bg-purple-900 m-2 p-2 rounded-lg">
          <PencilSquare size={20} color="white" />
        </button> */}
        {/* <button className="flex items-center bg-purple-900 m-2 p-2 rounded-lg">
          <Trash3 size={20} color="white" />
        </button> */}
      </div>
    </div>
  );
}
