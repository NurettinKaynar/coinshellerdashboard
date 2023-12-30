import TopBar from "./components/topbar/topbar";
import Sidebar from "./components/sideBar/Sidebar";
import Cards from "./components/Cards/Cards";
import Charts from "./components/ChartCard/Charts";
import PriceChange from "./components/PriceChange/PriceChange";
import Table from "./components/TableChart/Table";

export default function Home() {
  return (
    <div className="flex gap-2  w-full h-full">
      <Sidebar />

      <div className=" w-11/12 flex flex-col gap-2">
        <TopBar />
        <div className="p-6 h-full bg-gradient-to-r from-gray-900 to-gray-900">
          <div className="flex flex-col gap-2 ">
            <Cards />
            <div className="w-full flex gap-2">
              <Charts />
              <PriceChange />
            </div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}
