import Navbar from "./componets/Navbar";
import Sidebar from "./componets/Sidebar";

function App() {
  return (
    <section className="w-screen h-screen flex justify-end items-center bg-dark">
      <Navbar />
      <Sidebar />
      <div className="h-full flex justify-center items-center relative">
        <h1 className="text-text">Block #1</h1>
      </div>
    </section>
  );
}

export default App;
