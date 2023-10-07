import CardVideo from "../components/CardVideo";
import Sidebar from "../components/Sidebar";

export default function PrincipalPage() {
  const infos = [
    {
      nombreVideo: "Holaaaaaaaaaaaaa",
      canal: "Francisco",
      vistas: "123 vistas",
      tiempoSubido: "hace 1 mes",
    },
    {
      nombreVideo: "Holaaaaaaaaaaaaa",
      canal: "Angel",
      vistas: "465 vistas",
      tiempoSubido: "hace 2 semanas",
    },
    {
      nombreVideo: "Holaaaaaaaaaaaaa",
      canal: "Sebastían",
      vistas: "781 vistas",
      tiempoSubido: "hace 1 semana",
    },
    {
      nombreVideo: "Holaaaaaaaaaaaaa",
      canal: "Emil",
      vistas: "357 vistas",
      tiempoSubido: "hace 4 horas",
    },
    {
      nombreVideo: "Holaaaaaaaaaaaaa",
      canal: "Carloss",
      vistas: "980 vistas",
      tiempoSubido: "hace 6 horas",
    },
  ];

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-5/6 h-fit">
          <div className="font-serif text-white text-2xl mx-2">
            <h1>Recientemente añadidos</h1>
          </div>
          <div className="flex flex-wrap">
            {infos.map((info) => (
              <CardVideo
                nombreVideo={info.nombreVideo}
                canal={info.canal}
                vistas={info.vistas}
                tiempoSubido={info.tiempoSubido}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
