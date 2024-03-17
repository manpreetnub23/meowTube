import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="flex">
        <Sidebar />
        {/* videos will render here. */}
        <Feed />
      </div>
    </div>
  );
}

export default App;
