import CardVideo from "../components/CardVideo";
import Sidebar from "../components/Sidebar";

export default function PrincipalPage() {
  const infos = [
    {
      id: 1,
      nombreVideo: "Holaaaaaaaaaaaaa",
      canal: "Francisco",
      vistas: "123 vistas",
      tiempoSubido: "hace 1 mes",
    },
    {
      id: 2,
      nombreVideo: "Holaaaaaaaaaaaaa",
      canal: "Angel",
      vistas: "465 vistas",
      tiempoSubido: "hace 2 semanas",
    },
    {
      id: 3,
      nombreVideo: "Holaaaaaaaaaaaaa",
      canal: "Sebastían",
      vistas: "781 vistas",
      tiempoSubido: "hace 1 semana",
    },
    {
      id: 4,
      nombreVideo: "Holaaaaaaaaaaaaa",
      canal: "Emil",
      vistas: "357 vistas",
      tiempoSubido: "hace 4 horas",
    },
    {
      id: 5,
      nombreVideo: "Holaaaaaaaaaaaaa",
      canal: "Carloss",
      vistas: "980 vistas",
      tiempoSubido: "hace 6 horas",
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
              nombreVideo={info.nombreVideo}
              canal={info.canal}
              vistas={info.vistas}
              tiempoSubido={info.tiempoSubido}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
