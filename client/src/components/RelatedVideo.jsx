export default function RelatedVideo() {
  return (
    <div className="flex columns-2 my-3">
      <div className="w-44 h-[99px] bg-zinc-300 rounded-lg"></div>
      <div className="px-2">
        <h3 className="text-xl whitespace-nowrap overflow-hidden">
          Nombre del video
        </h3>
        <p className="opacity-50 text-sm">Nombre del canal</p>
        <p className="opacity-50 text-sm">
          123 vistas ·{/* alt + 250 */} Hace 23
        </p>
      </div>
    </div>
  );
}
