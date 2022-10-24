import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getHistoricalData } from "../../store/reducers/diseases";
import numeral from "numeral";
import "./LineGraph.css";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

// Restrucure the data to meet chartjs requirements
const buildChartData = (data, casesType = "cases") => {
  const chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      const newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

const LineGraph = ({ caseType = "cases" }) => {
  const { diseaseName, historical } = useSelector((state) => state.disease);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  // Fecth historical data
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getHistoricalData(diseaseName));
      let chart = buildChartData(historical);
      setData(chart);
    };
    fetchData();
  }, []);

  return (
    <div>
      {console.log(data)}
      {data?.length > 0 && (
        <Line
          options={options}
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                data: data,
              },
            ],
          }}
        />
      )}
    </div>
  );
};

export default LineGraph;
