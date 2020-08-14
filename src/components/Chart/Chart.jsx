import React, { useState, useEffect } from "react";
import styles from "./Chart.module.css";
import { fetchDaily } from "../../api";
import { Line, Bar } from "react-chartjs-2";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPIDaily = async () => {
      setDailyData(await fetchDaily());
    };
    fetchAPIDaily();
    //console.log(dailyData);
  }, []);

  const lineChart =
    // If no dailyData yet, lenght=0, falsy
    dailyData.length ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(dailyData => dailyData.confirmed),
              label: "Infected",
              borderColor: "#2739B8",
              fill: true
            },
            {
              data: dailyData.map(dailyData => dailyData.deaths),
              label: "Deaths",
              borderColor: "#B84A44",
              fill: true
            }
          ]
        }}
      />
    ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            data: [confirmed.value, recovered.value, deaths.value],
            label: "People",
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(255,0,0,0.5)"
            ]
          }
        ]
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current State in ${country}` }
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chart;
