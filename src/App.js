import { Card, CardContent } from "@material-ui/core";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/header/Header";
import InfoBox from "./components/infoBox/InfoBox";
import LineGraph from "./components/lineGraph/LineGraph";
import Map from "./components/map/Map";
import Table from "./components/table/Table";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { prettyPrintStat } from "./utils/utils";

function App() {
  const { countryInfo } = useSelector((state) => state.disease);
  const [casesType, setCasesType] = useState("cases");
  return (
    <div className="app">
      <div className="app__left">
        <Header />
        <div className="app__stats">
          <InfoBox
            isRed
            active={casesType === "cases"}
            onClick={(e) => setCasesType("cases")}
            title="Cases"
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={prettyPrintStat(countryInfo.cases)}
          />
          <InfoBox
            active={casesType === "recovered"}
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={prettyPrintStat(countryInfo.recovered)}
          />
          <InfoBox
            isRed
            active={casesType === "deaths"}
            onClick={(e) => setCasesType("deaths")}
            title="Death"
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={prettyPrintStat(countryInfo.deaths)}
          />
        </div>
        <Map casesType={casesType} />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3 className="app__right__title">Live cases by country</h3>
          <Table />
          <h3 className="app__right__title">Worldwide new {casesType}</h3>
          <LineGraph caseType={casesType} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
