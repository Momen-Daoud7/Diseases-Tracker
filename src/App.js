import "./App.css";
import Header from "./components/header/Header";
import InfoBox from "./components/infoBox/InfoBox";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__stats">
        <InfoBox title="coronavirus cases" cases={123} total={12221} />
        <InfoBox title="Recoverd" cases={123} total={12221} />
        <InfoBox title="Death" cases={123} total={12221} />
      </div>
    </div>
  );
}

export default App;
