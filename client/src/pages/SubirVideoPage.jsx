import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Upload } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function SubirVideoPage() {
  const { isSignedIn } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/");
    }
  }, [isSignedIn]);

  return (
    <div className="flex justify-center align-middle">
      <div className="grid place-content-center w-[600px] font-serif text-xl p-6 my-4 rounded-2xl bg-[#5a189a] bg-opacity-30">
        <h1 className="text-white text-2xl my-2 text-center">Subir vídeo</h1>
        <label className="text-white">Vídeo: </label>
        <input
          type="file"
          accept="video/mp4,video/x-m4v,video/*"
          className="p-1 px-3 bg-[#5a189a] bg-opacity-30 text-white rounded-lg focus:outline-none"
        />
        <br />
        <label className="text-white">Miniatura: </label>
        <input
          type="file"
          accept="image/png, image/jpeg"
          className="p-1 px-3 bg-[#5a189a] bg-opacity-30 text-white rounded-lg focus:outline-none"
        />
        <br />
        <label className="text-white">Título: </label>
        <input
          type="text"
          className="p-1 px-3 bg-[#5a189a] bg-opacity-30 text-white rounded-lg focus:outline-none"
          placeholder="Título de vídeo"
        />
        <br />
        <label className="text-white">Descripción: </label>
        <textarea
          type="textarea"
          className="p-1 px-3 bg-[#5a189a] bg-opacity-30 text-white rounded-lg focus:outline-none"
          placeholder="Descripción del vídeo"
        />
        <br />
        <label className="text-white">Visibilidad: </label>
        <select className="p-1 px-3 bg-[#5a189a] bg-opacity-30 text-white rounded-lg focus:outline-none">
          <option value="1">Público</option>
          <option value="2">Privado</option>
        </select>
        <br />
        <button
          type="submit"
          className="flex justify-center align-middle rounded-lg bg-[#5a189a] p-2 text-white"
        >
          <Upload size={20} color="white" />
          <p className="px-4">Subir</p>
        </button>
      </div>
    </div>
  );
}
