import { Card, CardContent } from "@material-ui/core";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/header/Header";
import InfoBox from "./components/infoBox/InfoBox";
import LineGraph from "./components/lineGraph/LineGraph";
import Map from "./components/map/Map";
import Table from "./components/table/Table";

function App() {
  const { countryInfo } = useSelector((state) => state.disease);
  return (
    <div className="app">
      <div className="app__left">
        <Header />
        <div className="app__stats">
          <InfoBox title="Cases" cases={countryInfo.todayCases} total={12221} />
          <InfoBox
            title="Recoverd"
            cases={countryInfo.todayRecovered}
            total={12221}
          />
          <InfoBox
            title="Death"
            cases={countryInfo.todayDeaths}
            total={12221}
          />
        </div>
        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3 className="app__right__title">Live cases by country</h3>
          <Table />
          <h3 className="app__right__title">Worldwide cases</h3>
          <LineGraph />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
