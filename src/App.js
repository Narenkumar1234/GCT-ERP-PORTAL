import "./App.css";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import Curruculum from "./Curriculum";

function App() {
  return (
    <>
      <div className="grid  grid-cols-12">
        <div className="pl-20 col-span-2 rounded-full pt-10  border-r-2">
          <LeftPanel />
        </div>
        <div className="col-span-8 text-center pt-10 ">
          <Curruculum />
        </div>
        <div className="col-span-2 rounded-full pt-10 text-center border-l-2">
          <RightPanel />
        </div>
      </div>
    </>
  );
}

export default App;
