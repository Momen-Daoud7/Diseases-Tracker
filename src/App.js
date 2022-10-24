import { Card, CardContent } from "@material-ui/core";
import "./App.css";
import Header from "./components/header/Header";
import InfoBox from "./components/infoBox/InfoBox";
import Map from "./components/map/Map";

function App() {
  return (
    <div className="app">
      <div className="app__left">
        <Header />
        <div className="app__stats">
          <InfoBox title="coronavirus cases" cases={123} total={12221} />
          <InfoBox title="Recoverd" cases={123} total={12221} />
          <InfoBox title="Death" cases={123} total={12221} />
        </div>
        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
