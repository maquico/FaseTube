import { Link } from "react-router-dom";
import { Search, Upload } from "react-bootstrap-icons";

export default function Topbar() {
  return (
    <div className="sticky top-0">
      <div className="bg-black w-full h-20 px-20 py-5 flex justify-center">
        {/* Logotipo */}
        <div className="flex-1 flex justify-start">
          <Link to="/">
            <img src="/public/imagotipo.svg" width={120} />
          </Link>
        </div>

        {/* Buscador */}
        <div className="flex-1 flex justify-center">
          <input
            className="w-full bg-violet-900 bg-opacity-30 rounded-l-3xl flex justify-end caret-white text-white px-5"
            placeholder="Buscar"
          />
          <button className="w-20 bg-violet-900 bg-opacity-60 rounded-tr-3xl rounded-br-3xl end-full flex justify-center items-center hover:border-2 border-white">
            <Search color="white" size={20} />
          </button>
          {/* <input type="search" className="w-11/12" />
        <button className="bg-purple-700 w-20" /> */}
        </div>

        {/* Cuenta */}
        <div className="flex-1 flex justify-end">
          <Link className="flex" to="/">
            <Upload color="#7B2CBF" size={20} className="self-center mx-2" />
            <p className="text-white self-center m-0 font-serif text-lg">
              Subir vídeo
            </p>
          </Link>
          <div className="bg-violet-600 w-10 h-10 rounded-full mx-4"></div>
        </div>
      </div>
    </div>
  );
}
