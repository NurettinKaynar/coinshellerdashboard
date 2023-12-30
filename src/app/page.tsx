import TopBar from "./components/topbar/topbar";
import Sidebar from "./components/sideBar/Sidebar";
import MiniCard from "./components/MiniCard/MiniCard";

export default function Home() {
  return (
    <div style={{ height: "100vh" }} className="flex gap-2  w-full">
      <Sidebar />

      <div className=" w-11/12 flex flex-col gap-2">
        <TopBar />
        <div className="p-6 h-full bg-gradient-to-r from-gray-900 to-gray-900">
          <div className="flex gap-2 ">
            <MiniCard />
          </div>
        </div>
      </div>
    </div>
  );
}
