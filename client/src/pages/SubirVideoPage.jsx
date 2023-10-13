import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Upload } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SubirVideoPage() {
  const { isSignedIn } = useUser();
  const [resultado, setResultado] = useState("");

  const [videoFile, setVideoFile] = useState(null);
  const [miniaturaFile, setMiniaturaFile] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [visibilidad, setVisibilidad] = useState("1");

  const user_id = localStorage.getItem("user_id");

  const handleVideoFile = (event) => setVideoFile(event.target.files[0]);
  const handleMiniaturaFile = (event) =>
    setMiniaturaFile(event.target.files[0]);
  const handleTitulo = (event) => setTitulo(event.target.value);
  const handleDescripcion = (event) => setDescripcion(event.target.value);
  const handleVisibilidad = (event) => setVisibilidad(event.target.value);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) navigate("/");
  }, [isSignedIn]);

  const subirVideo = () => {
    if (
      videoFile === null ||
      miniaturaFile === null ||
      titulo.trim().length === 1
    )
      return;

    const formData = new FormData();
    formData.append("vidFile", videoFile);
    formData.append("imgFile", miniaturaFile);
    formData.append("titulo", titulo);
    formData.append("descripcion", descripcion);
    formData.append("visibilidad_id", visibilidad);
    formData.append("user_id", user_id);

    axios
      .post(
        "https://fase-tube-server-c537f172c3b7.herokuapp.com/api/videos/upload",
        formData
      )
      .then((response) =>
        setResultado(
          `${response.data.message} (Duración estimada: ${response.data.duration} segundos)`
        )
      );
  };

  return (
    <div className="flex justify-center align-middle">
      <div className="grid place-content-center w-[600px] font-serif text-xl p-6 my-4 rounded-2xl bg-[#5a189a] bg-opacity-30">
        <h1 className="text-white text-2xl my-2 text-center">Subir vídeo</h1>
        <label className="text-white">Vídeo: </label>
        <input
          type="file"
          accept="video/mp4,video/x-m4v,video/*"
          className="p-1 px-3 bg-[#5a189a] bg-opacity-30 text-white rounded-lg focus:outline-none"
          onChange={handleVideoFile}
        />
        <br />
        <label className="text-white">Miniatura: </label>
        <input
          type="file"
          accept="image/png, image/jpeg"
          className="p-1 px-3 bg-[#5a189a] bg-opacity-30 text-white rounded-lg focus:outline-none"
          onChange={handleMiniaturaFile}
        />
        <br />
        <label className="text-white">Título: </label>
        <input
          type="text"
          className="p-1 px-3 bg-[#5a189a] bg-opacity-30 text-white rounded-lg focus:outline-none"
          placeholder="Título de vídeo"
          onChange={handleTitulo}
        />
        <br />
        <label className="text-white">Descripción: </label>
        <textarea
          type="textarea"
          className="p-1 px-3 bg-[#5a189a] bg-opacity-30 text-white rounded-lg focus:outline-none"
          placeholder="Descripción del vídeo"
          onChange={handleDescripcion}
        />
        <br />
        <label className="text-white">Visibilidad: </label>
        <select
          className="p-1 px-3 bg-[#5a189a] bg-opacity-30 text-white rounded-lg focus:outline-none"
          onChange={handleVisibilidad}
        >
          <option value="1">Público</option>
          <option value="2">Privado</option>
        </select>
        <br />
        <button
          type="submit"
          className="flex justify-center align-middle rounded-lg bg-[#5a189a] p-2 text-white"
          onClick={subirVideo}
        >
          <Upload size={20} color="white" />
          <p className="px-4">Subir</p>
        </button>
        <br />
        <p className="text-white text-center">{resultado}</p>
      </div>
    </div>
  );
}
