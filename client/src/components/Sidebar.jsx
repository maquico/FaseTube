import {
  HouseDoorFill,
  CollectionPlayFill,
  HandThumbsUpFill,
  CameraReelsFill,
} from "react-bootstrap-icons";
import { NavLink, Link } from "react-router-dom";

export default function Sidebar({
  isSignedIn = false,
  subscriptionsInfoMap = null,
  clerk_user_id = null,
}) {
  return (
    <aside className="w-1/6 px-2">
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

      {isSignedIn === true && subscriptionsInfoMap !== null && (
        <>
          <NavLink
            to={"/canal/" + clerk_user_id}
            className={({ isActive }) =>
              isActive
                ? "flex px-5 items-center mt-2 w-full h-10 bg-violet-500 rounded-xl hover:bg-violet-600"
                : "flex px-5 items-center mt-2 w-full h-10 rounded-xl text-violet-500 hover:bg-violet-900 hover:bg-opacity-30"
            }
          >
            <CameraReelsFill size={20} />
            <p className="px-2 font-serif">Mi canal</p>
          </NavLink>
        </>
      )}

      {/* If there's no user logged in dont show suscripciones, if there's show it */}
      {isSignedIn === true && (
        <>
          <hr className="m-4 border border-zinc-300 border-opacity-50" />
          <div className="w-full">
            <h2 className="text-white font-serif text-xl w-full px-5 my-2">
              Suscripciones
            </h2>
            {/* <hr className="my-2 invisible" /> */}
            <Suscripciones subscriptionsInfoMap={subscriptionsInfoMap} />
          </div>
        </>
      )}
    </aside>
  );
}

const Suscripciones = ({ subscriptionsInfoMap }) => {
  if (!subscriptionsInfoMap) {
    // Handle the case when subscriptionsInfoMap is not defined
    return null;
  }
  return (
    <div className="flex w-full p-2 mx-2 columns-2 hover:bg-[#5A189A80] rounded-xl">
      {[...subscriptionsInfoMap.entries()].map(([key, subscriptionInfo]) => (
        <Link
          to={`/canal/${key}`}
          key={key}
          className="flex w-full p-2 mx-2 items-center"
        >
          <div className="w-8 h-8 bg-white rounded-full">
            {subscriptionInfo.foto_ruta && (
              <img src={subscriptionInfo.foto_ruta} alt="" />
            )}
          </div>
          <h4 className="text-[#7B2CBF] font-serif mx-2">
            {subscriptionInfo.username}
          </h4>
        </Link>
      ))}
    </div>
  );
};
