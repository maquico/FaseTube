import { Link } from "react-router-dom";
import { Search, Upload } from "react-bootstrap-icons";
import { useUser } from "@clerk/clerk-react";

export default function Topbar() {
  const { isSignedIn } = useUser();

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-black w-full h-20 px-20 py-5 flex justify-center">
        {/* Logotipo */}
        <div className="flex-1 flex justify-start">
          <Link to="/">
            <img src="/imagotipo.svg" width={120} />
          </Link>
        </div>

        {/* Buscador */}
        <div className="flex-1 flex justify-center">
          <input
            className="w-full bg-violet-900 bg-opacity-30 rounded-l-3xl flex justify-end caret-white text-white px-5 font-serif focus:outline-none"
            placeholder="Buscar"
          />
          <button className="w-20 bg-violet-900 bg-opacity-60 rounded-tr-3xl rounded-br-3xl end-full flex justify-center items-center">
            <Search color="white" size={20} />
          </button>
          {/* <input type="search" className="w-11/12" />
        <button className="bg-purple-700 w-20" /> */}
        </div>

        {/* Cuenta */}
        {isSignedIn ? (
          // Sesión iniciada
          <div className="flex-1 flex justify-end">
            <Link className="flex" to="/">
              <Upload color="#7B2CBF" size={20} className="self-center mx-2" />
              <p className="text-white self-center m-0 font-serif text-lg">
                Subir vídeo
              </p>
            </Link>
            <div className="bg-violet-600 w-10 h-10 rounded-full mx-4"></div>
            <Link className="flex" to="/sign-up">
              <div className="bg-[#240046] py-2 px-4 rounded-xl text-white self-center m-0 font-serif text-lg">
                Cerrar sesión
              </div>
            </Link>
          </div>
        ) : (
          // Sesión no iniciada
          <div className="flex-1 flex justify-end">
            <Link className="flex" to="/sign-up">
              <div className="bg-[#240046] py-2 px-4 rounded-xl text-white self-center m-0 font-serif text-lg">
                Crear cuenta
              </div>
            </Link>
            <Link className="flex" to="/sign-in">
              <p className="py-2 px-4 rounded-xl text-[#7B2CBF] self-center m-0 font-serif text-lg">
                Iniciar sesión
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
