import { useParams, Link, json } from "react-router-dom";
import { HandThumbsUp, HandThumbsDown } from "react-bootstrap-icons";
import RelatedVideo from "../components/RelatedVideo";
import { useEffect, useState } from "react";
import axios from "axios";
import Comments from '../components/Comments';

function formatDate(date) {
  const nombreMes = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const day = date.getDate();
  const month = nombreMes[date.getMonth()];
  const year = date.getFullYear();

  return `${day} de ${month} de ${year}`;

}

const fetchLikes = async (videoId) => {
  try {
    const response = await axios.get('https://fase-tube-server-c537f172c3b7.herokuapp.com/api/likes', { video_id: videoId });
    return response.data;
  } catch (error) {
    console.error('Error fetching likes:', error);
    return 0; // Handle the error as needed
  }
};

// Function to fetch the number of dislikes
const fetchDislikes = async (videoId) => {
  try {
    const response = await axios.get('https://fase-tube-server-c537f172c3b7.herokuapp.com/api/dislikes', { video_id: videoId });
    return response.data;
  } catch (error) {
    console.error('Error fetching dislikes:', error);
    return 0; // Handle the error as needed
  }
};

const likeVideo = async (likesStates, setLikesStates, user_id, video_id, likes, setLikes, dislikes, setDislikes) => {
  // Send a request to the API to like the video
  let isLiked = 0;
  try {
    if (likesStates === 0) {
      isLiked = 1;
      setLikesStates(1);
      setLikes(likes + 1);
    } else if(likesStates === 1){
      isLiked = 0;
      setLikesStates(0);
      setLikes(likes - 1);
    } else{
      isLiked = 1;
      setLikesStates(1);
      setLikes(likes + 1);
      setDislikes(dislikes - 1)
    }
    await axios.put('https://fase-tube-server-c537f172c3b7.herokuapp.com/api/update_video', { user_id, video_id, isLiked: isLiked});
     // Update the number of likes in the state
  } catch (error) {
    console.error('Error liking the video:', error);
  }
};

const dislikeVideo = async (likesStates, setLikesStates, user_id, video_id, likes, setLikes, dislikes, setDislikes) => {
  // Send a request to the API to dislike the video
  let isLiked = 0;
  try {
    if (likesStates === 0) {
      isLiked = -1;
      setLikesStates(-1);
      setDislikes(dislikes + 1); 
    } else if(likesStates === -1){
      isLiked = 0;
      setLikesStates(0);
      setDislikes(dislikes - 1);
    } else{
      isLiked = -1;
      setLikesStates(-1);
      setDislikes(dislikes + 1);
      setLikes(likes - 1);
    }
    await axios.put('https://fase-tube-server-c537f172c3b7.herokuapp.com/api/update_video', { user_id, video_id, isLiked: isLiked});
  } catch (error) {
    console.error('Error disliking the video:', error);
  }
}

const fetchCanal = (canal_id, setCanalInfo) => {
  console.log("Dentro de fetchCanal: ", canal_id)
  axios
    .get(
      `https://fase-tube-server-c537f172c3b7.herokuapp.com/api/canal/info?canal_id=${canal_id}`
    )
    .then((res) => {
      // console.log(res.data);
      setCanalInfo(res.data);
    })
    .catch((error) => console.error("Error fetching canal: ", error));
};

const checkCurrentLikeStatus = async (user_id, video_id) => {
  if (isNaN(user_id) || isNaN(video_id)) {
    // Handle invalid user_id or video_id here, e.g., return an error response.
    return;
  }
  console.log("Dentro de checkCurrentLikeStatus: ", user_id, video_id)
  try {
    const response = await axios.get(`https://fase-tube-server-c537f172c3b7.herokuapp.com/api/likes/status/`, {
      params: {
        user_id: user_id,
        video_id: video_id,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error checking like status:', error);
    return null; // Handle the error as needed
  }
};

export default function VisualizadorPage() {
  const { video } = useParams();
  const [videoInfo, setVideoInfo] = useState({});
  const [canalInfo, setCanalInfo] = useState({});
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [likesStates, setLikesStates] = useState(0); 
  const [canalId, setCanalId] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://fase-tube-server-c537f172c3b7.herokuapp.com/api/videos/id/?video_id=${video}`
      )
      .then((res) => {
        console.log(res.data);
        setVideoInfo(res.data);
        console.log("Dentro de useEffect: ", res.data.user_id)
        setCanalId(res.data.user_id);
        fetchCanal(res.data.user_id, setCanalInfo);
      })
      .catch((error) => console.error("Error fetching video: ", error));
  }, [video]);

  useEffect(() => {
    // Make an HTTP request to the backend to fetch the comments
    const videoID = parseInt(video, 10)
    if (isNaN(videoID)) {
    // Handle invalid user_id or video_id here, e.g., return an error response.
    return;
  }

    axios
      .get(`https://fase-tube-server-c537f172c3b7.herokuapp.com/api/comments/?video_id=${videoID}`)
      .then((response) => {
        // Parse the response data into a JavaScript object
        const commentsData = response.data;

        // Update the state of the component
        setComments(commentsData);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, [video]);

  useEffect(() => {
    // Fetch the like and dislike counts for the current video
    fetchLikes(video).then((likesCount) => {
      console.log("likesCount", likesCount)
      setLikes(likesCount);
    });
  
    fetchDislikes(video).then((dislikesCount) => {
      console.log("dislikesCount", dislikesCount)
      setDislikes(dislikesCount);
    });
  
    // Rest of your code
  }, [video, canalId]);

  

  useEffect(() => {
    const check_canalId = parseInt(canalId, 10); // Parse to integer with base 10
    const check_videoId = parseInt(video, 10);

    // Fetch the initial like/dislike status for the current user and video
    checkCurrentLikeStatus(check_canalId, check_videoId).then((likeStatus) => {
      if (likeStatus.isLiked !== 0) {
        // Handle the like/dislike status, e.g., set your component state accordingly
        if (likeStatus.isLiked === 1) {
          // The user has liked the video
          setLikesStates(1);
        } else if (likeStatus.isLiked === -1) {
          // The user has disliked the video
          setLikesStates(-1);
        }
      }
      console.log("CURRENT STATUS: ", likesStates)
    });
  }, [canalId, videoInfo]);

  return (
    <div className="flex columns-3">
      {/* Columna invisible */}
      <div className="w-20" />

      {/* Video */}
      <div className="w-[971px]">
        {/* Visualizador */}
        <div className="w-[930px] h-[523px] flex rounded-xl justify-center">
          <video
            src={`https://fase-tube-server-c537f172c3b7.herokuapp.com/api/videos/watch/?video_id=${video}`}
            className="w-[930px] h-[523px] object-cover focus:outline-none rounded-xl"
            controls
            autoPlay
          />
        </div>
        <hr className="my-1 invisible" />

        {/* Interactividad */}
        <div className="w-[930px] h-24">
          <h1 className="font-serif text-white text-2xl">{videoInfo.titulo}</h1>
          <hr className="my-1 invisible" />
          <div className="flex w-full columns-4">
            {/* Canal */}
            <div className="w-10 h-10 rounded-full">
              <img className="rounded-full" src={canalInfo.foto_ruta}></img>
            </div>
            <div className="w-fit mx-3">
              <Link to={"/canal/" + canalId}>
                <h2 className="font-serif text-white whitespace-nowrap overflow-hidden">
                  {canalInfo.username}
                </h2>
                <p className="font-serif text-white text-opacity-30 whitespace-nowrap overflow-hidden">
                  {canalInfo.nombres} {canalInfo.apellidos}
                </p>
              </Link>
            </div>

            {/* Botón de suscripción */}
            <div className="flex mx-2">
              <button className="bg-purple-700 rounded-full px-4 font-serif text-white">
                Suscribirse
              </button>
            </div>
            {/* Botón de like */}
            <div className="flex ml-auto">
              <div className="w-28 h-10 bg-violet-900 bg-opacity-30 rounded-2xl border-2 border-zinc-300 border-opacity-30 flex items-center px-3">
                <Link
                  onClick={() => likeVideo(likesStates, setLikesStates, canalId, video, likes, setLikes, dislikes, setDislikes)}
                  className={`text-white font-serif mx-1 ${likesStates === 1 ? 'text-purple-500' : ''}`}
                >
                  <HandThumbsUp className={likesStates === 1 ? 'text-purple-500' : 'text-white'} />
                </Link>
                <p className="text-white font-serif mx-1">{likes}</p> {/* Display the number of likes here */}
                <Link
                  onClick={() => dislikeVideo(likesStates, setLikesStates, canalId, video, likes, setLikes, dislikes, setDislikes)}
                  className={`text-white font-serif mx-1 ${likesStates === -1 ? 'text-purple-500' : ''}`}
                >
                  <HandThumbsDown className={likesStates === -1 ? 'text-purple-500' : 'text-white'} />
                </Link>
                <p className="text-white font-serif mx-1">{dislikes}</p> {/* Display the number of dislikes here */}
              </div>
            </div>
          </div>
        </div>

        <hr className="my-0 invisible" />

        {/* Detalles del vídeo */}
        <div className="w-[930px] h-16 bg-violet-900 bg-opacity-50 rounded-lg px-4 py-2">
          <p className="text-white font-serif">
            {videoInfo.vistas} visualizaciones · Subido el{" "}
            {formatDate(new Date(videoInfo.fecha_reg))}
          </p>
          <p className="text-white font-serif">{videoInfo.descripcion}</p>
        </div>

        <hr className="my-3 invisible" />

        {/* Comentarios */}
        <div className="w-[930px] h-24">
          <h2 className="font-serif text-white text-2xl">Comentarios</h2>

          {/* Añadir comentario */}
          <div className="flex columns-3 my-2 w-[930px]">
            <div className="w-10 h-10 rounded-full">
              <img src={canalInfo.foto_ruta} />
            </div>
            <input
              type="text"
              placeholder="Añade tu comentario"
              className="bg-transparent text-white border-b-2 w-[800px] mx-4 focus:outline-none font-serif"
            />
            <button className="ml-auto bg-purple-700 rounded-full px-4 font-serif text-white">
              Comentar
            </button>
          </div>

          {/* Comentarios publicados */}
          <div className="my-4">
            <Comments comments={comments} />
          </div>
          <hr className="my-10 invisible" />
        </div>
      </div>

      {/* Recomendados */}
      <div className="w-96">
        <div className="font-serif text-white text-2xl mx-2">
          <h1>Video relacionados</h1>
          <RelatedVideo />
          <RelatedVideo />
          <RelatedVideo />
        </div>
      </div>
    </div>
  );
}









