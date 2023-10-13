import CardVideo from "../components/CardVideo";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import Cookies from "js-cookie";

export default function PrincipalPage() {
  const [clerk_user_id, setUserId] = useState();
  const [videosInfos, setVideosInfos] = useState([]);
  const [channelInfoMap, setChannelInfoMap] = useState(new Map());
  const { isSignedIn, user } = useUser();
  const [subscriptions, setSubscriptions] = useState([]);
  const [subscriptionsInfoMap, setSubscriptionsInfoMap] = useState(new Map());

  useEffect(() => {
    if (user === undefined || !isSignedIn) return;
    // Make a request to your server to retrieve the user_id based on the Clerk ID
    axios
      .get(
        `https://fase-tube-server-c537f172c3b7.herokuapp.com/api/user/id/?clave=${user.id}`
      )
      .then((response) => {
        // Assuming the API response contains the user_id
        const user_id = response.data.user_id;
        setUserId(user_id);

        // Set the user_id as a cookie
        Cookies.set("user_id", user_id);
        Cookies.set("clerk_user_id", user.id);
        localStorage.setItem("user_id", user_id);
      })
      .catch((error) => {
        console.error("Error fetching user ID:", error);
      });
  }, [user, isSignedIn]);

  useEffect(() => {
    // Make an Axios GET request to fetch data from the API endpoint
    axios
      .get(`https://fase-tube-server-c537f172c3b7.herokuapp.com/api/videos`)
      .then((response) => {
        setVideosInfos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  useEffect(() => {
    // Calculate tiempoSubido based on fecha_reg
    const calculateTiempoSubido = (fechaSubida) => {
      const fechaActual = new Date();
      const diferencia = fechaActual - new Date(fechaSubida);
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

      if (dias > 30) {
        const meses = Math.floor(dias / 30);

        if (meses > 12) {
          const años = Math.floor(meses / 12);
          return `${años} años`;
        } else {
          return `${meses} meses`;
        }
      } else {
        return `${dias} días`;
      }
    };

    // Fetch channel info for each video's user ID and update the channelInfoMap
    const updateChannelInfoMap = async () => {
      const updatedChannelInfoMap = await fetchChannelInfoForVideos(
        channelInfoMap,
        videosInfos,
        "videos"
      );
      setChannelInfoMap(updatedChannelInfoMap);
    };
    updateChannelInfoMap();

    // Call the function to calculate tiempoSubido and fetch channel info
    videosInfos.forEach((info) => {
      info.tiempoSubido = calculateTiempoSubido(info.fecha_reg);
    });
  }, [videosInfos]);

  useEffect(() => {
    // Function to fetch suscripciones for a given user ID
    if (!isSignedIn) return;
    else {
      axios
        .get(
          `https://fase-tube-server-c537f172c3b7.herokuapp.com/api/suscripciones/?suscriptor_clave=${clerk_user_id}`
        )
        .then((response) => {
          console.log(response.data);
          setSubscriptions(response.data);
        })
        .catch((error) => {
          console.error("Error fetching suscripciones:", error);
          return null;
        });
    }
  }, [clerk_user_id]);

  useEffect(() => {
    const updateSuscripcionesInfoMap = async () => {
      const updatedSubscriptionsInfoMap = await fetchChannelInfoForVideos(
        subscriptionsInfoMap,
        subscriptions,
        "suscripciones"
      );
      setSubscriptionsInfoMap(updatedSubscriptionsInfoMap);
    };
    updateSuscripcionesInfoMap();
  }, [subscriptions]);

  return (
    <div className="flex">
      <Sidebar subscriptionsInfoMap={subscriptionsInfoMap} />
      <div className="w-5/6 h-fit">
        <div className="font-serif text-white text-2xl mx-2">
          <h1>Recientemente añadidos</h1>
        </div>
        <div className="flex flex-wrap">
          {videosInfos.map((info) => (
            <CardVideo
              key={info.video_id}
              id={info.video_id}
              nombreVideo={info.titulo}
              canal={channelInfoMap.get(info.user_id) || {}}
              vistas={info.vistas}
              tiempoSubido={info.tiempoSubido}
              miniatura={info.miniatura_ruta}
              duracion={info.duracion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const getChannelInfo = async (channelId) => {
  console.log(`Fetching channel info for channel ID:`, channelId);
  try {
    const response = await axios.get(
      `https://fase-tube-server-c537f172c3b7.herokuapp.com/api/canal/info?canal_id=${channelId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching channel info:", error);
    return null;
  }
};

const fetchChannelInfoForVideos = async (dataMap, infos, purpose) => {
  const updatedChannelInfoMap = new Map(dataMap);
  let ID;
  console.log(purpose, infos);
  await Promise.all(
    infos.map(async (info) => {
      if (purpose === "suscripciones") {
        ID = info.canal_id;
      } else if (purpose === "videos") {
        ID = info.user_id;
      }
      console.log(`Fetching ${purpose} info for user ID:`, ID);
      const channelInfo = await getChannelInfo(ID);
      updatedChannelInfoMap.set(ID, {
        username: channelInfo ? channelInfo.username : "Unknown",
        foto_ruta: channelInfo.foto_ruta,
      });
    })
  );
  return updatedChannelInfoMap;
};
