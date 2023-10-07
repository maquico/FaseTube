import {
  HouseDoorFill,
  CollectionPlayFill,
  HandThumbsUpFill,
  CameraReelsFill,
} from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-1/6 px-2 fixed">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "flex px-5 items-center mt-2 w-full h-10 bg-violet-500 rounded-xl hover:bg-violet-600"
            : "flex px-5 items-center mt-2 w-full h-10 rounded-xl text-violet-500 hover:bg-violet-900 hover:bg-opacity-30"
        }
      >
        <HouseDoorFill size={20} />
        {/* <HouseDoorFill size={20} /> */}
        <p className="px-2 font-serif">Principal</p>
      </NavLink>

      <NavLink
        to="/suscripciones"
        className={({ isActive }) =>
          isActive
            ? "flex px-5 items-center mt-2 w-full h-10 bg-violet-500 rounded-xl hover:bg-violet-600"
            : "flex px-5 items-center mt-2 w-full h-10 rounded-xl text-violet-500 hover:bg-violet-900 hover:bg-opacity-30"
        }
      >
        <CollectionPlayFill size={20} />
        <p className="px-2 font-serif">Suscripciones</p>
      </NavLink>

      <NavLink
        to="/liked-videos"
        className={({ isActive }) =>
          isActive
            ? "flex px-5 items-center mt-2 w-full h-10 bg-violet-500 rounded-xl hover:bg-violet-600"
            : "flex px-5 items-center mt-2 w-full h-10 rounded-xl text-violet-500 hover:bg-violet-900 hover:bg-opacity-30"
        }
      >
        <HandThumbsUpFill size={20} />
        <p className="px-2 font-serif">Videos que te gustan</p>
      </NavLink>

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "flex px-5 items-center mt-2 w-full h-10 bg-violet-500 rounded-xl hover:bg-violet-600"
            : "flex px-5 items-center mt-2 w-full h-10 rounded-xl text-violet-500 hover:bg-violet-900 hover:bg-opacity-30"
        }
      >
        <CameraReelsFill size={20} />
        <p className="px-2 font-serif">Mi canal</p>
      </NavLink>
    </aside>
  );
}

const NavLinkWithIcon = () => {
  return "";
};
