import CardVideo from "../components/CardVideo";
import Sidebar from "../components/Sidebar";

export default function PrincipalPage() {
  const infos = [
    {
      id: 1,
      nombreVideo: "Tutorial de cómo comer",
      canal: "Francisco",
      vistas: "123 vistas",
      tiempoSubido: "hace 1 mes",
      miniatura:
        "https://uploads.candelaestereo.com/1/2019/03/conoce-todo-los-beneficios-de-comer-acompanado.jpg",
    },
    {
      id: 2,
      nombreVideo: "Amazon Rekognition en Visual Studio MAC",
      canal: "Angel",
      vistas: "465 vistas",
      tiempoSubido: "hace 2 semanas",
      miniatura:
        "https://miro.medium.com/v2/resize:fit:600/1*ozYrdn7kUvdkQ2Eh6PARkg.png",
    },
    {
      id: 3,
      nombreVideo: "Les debo una disculpa",
      canal: "Sebastían",
      vistas: "781 vistas",
      tiempoSubido: "hace 1 semana",
      miniatura:
        "https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/01/03/5fa435611e18d.png",
    },
    {
      id: 4,
      nombreVideo: "Mi experiencia en Puerto Rico",
      canal: "Emil",
      vistas: "357 vistas",
      tiempoSubido: "hace 4 horas",
      miniatura: "https://i.ytimg.com/vi/9w8W5vVBRdQ/maxresdefault.jpg",
    },
    {
      id: 5,
      nombreVideo: "Domina ASP.NET en 5 minutos",
      canal: "Carlos",
      vistas: "980 vistas",
      tiempoSubido: "hace 6 horas",
      miniatura:
        "https://www.aceinfoway.com/blog/wp-content/uploads/2020/05/top-5-benefits-of-using-aspnet-core.jpg",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6 h-fit">
        <div className="font-serif text-white text-2xl mx-2">
          <h1>Recientemente añadidos</h1>
        </div>
        <div className="flex flex-wrap">
          {infos.map((info) => (
            <CardVideo
              key={info.id}
              id={info.id}
              nombreVideo={info.nombreVideo}
              canal={info.canal}
              vistas={info.vistas}
              tiempoSubido={info.tiempoSubido}
              miniatura={info.miniatura}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
