import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function BusquedaPage() {
  const { busqueda } = useParams();

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6 h-fit">
        <div className="font-serif text-white text-2xl mx-2">
          <h1>Resultados de la busqueda: {busqueda}</h1>
        </div>
      </div>
    </div>
  );
}
