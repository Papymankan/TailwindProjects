import "./App.css";
import Card from "./components/Card/Card.jsx";

function App() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center p-4 bg-slate-300">
        <h2 className="mt-10 text-2xl font-bold sm:text-4xl">
          Tailwind Mini-Projects
        </h2>
        <div className="w-7/8 mt-12 flex flex-wrap lg:w-5/6 justify-evenly">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
