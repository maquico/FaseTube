import Sidebar from "../components/Sidebar";

export default function PrincipalPage() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="w-5/6 bg-red-500 h-screen ">
          <h1>Hola</h1>
        </main>
      </div>
    </>
  );
}
