export default function CardVideo({
  nombreVideo = "None",
  canal = "None",
  vistas = "None",
  tiempoSubido = "None",
}) {
  return (
    <div className="w-72 my-4 mx-2">
      {/* Miniatura */}
      <div className="h-44 bg-zinc-300 rounded-lg" />

      {/* Información */}
      <div className="flex columns-2 px-1 py-4">
        <div className="w-10 h-10 rounded-full bg-purple-700" />
        <div className="w-60">
          <h2 className="text-white font-serif mx-2">{nombreVideo}</h2>
          <p className="text-white text-opacity-60 text-sm font-serif mx-2">
            {canal}
          </p>
          <p className="text-white text-opacity-60 text-sm font-serif mx-2">
            {vistas} ·{/* alt + 250 */} {tiempoSubido}
          </p>
        </div>
      </div>
    </div>
  );
}
