import Sidebar from "../components/Sidebar";
import { BugFill } from "react-bootstrap-icons";

export default function NotFoundPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6 h-fit">
        <div className="font-serif text-white text-2xl mx-2">
          <div className="flex justify-center items-center h-96">
            <BugFill />
            <h1 className="mx-3">Página no encontrada</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
