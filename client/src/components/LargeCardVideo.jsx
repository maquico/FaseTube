export default function LargeCardVideo({
  miniatura,
  titulo,
  vistas,
  tiempoSubido,
  canal,
  descripcion,
}) {
  return (
    <div className="flex my-4">
      <div className="flex w-[285px] h-[160px] rounded-lg bg-white mx-4 justify-end items-start">
        {/* <img className="w-[285px] h-[160px] object-cover focus:outline-none" /> */}
        <span className="absolute bg-black opacity-90 m-2 p-1 rounded-md text-white text-sm font-serif z-30">
          20:60
        </span>
      </div>
      <div>
        <h2 className="text-2xl block">{titulo}</h2>
        <p>{vistas} vistas</p>
        <p>{tiempoSubido}</p>
        <p>Subido por {canal}</p>
        <p>Descripción: {descripcion}</p>
      </div>
    </div>
  );
}
