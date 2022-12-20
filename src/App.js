import "./App.css";
import Card from "./components/Card/Card";
import Rechart from "./components/Rechart/Rechart";

function App() {
  return (
    <div>
      <div className="justify-items-center ml-[2%] mr-[2%]">
        <Card></Card>
        <section>
          <div className="my-12">
            <Rechart></Rechart>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
