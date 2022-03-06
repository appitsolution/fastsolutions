import React, { useEffect } from "react"
import CountUp from "react-countup"
import { Chart, registerables } from "chart.js"
Chart.register(...registerables)
const ChartComponent = () => {
  useEffect(() => {
    const ctx = document.getElementById("myChart")
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [
          "Ankieter terenowy",
          "Ankieter CATI",
          "Audytor",
          "Koordynator",
          "Moderator",
          "Transkrybent",
        ],
        datasets: [
          {
            label: "691",
            backgroundColor: [
              "rgba(76, 60, 144, 1)",
              "rgba(237, 235, 244, 1)",
              "rgba(219, 216, 233, 1)",
              "rgba(183, 177, 211, 1)",
              "rgba(148, 138, 188, 1)",
              "rgba(112, 99, 166, 1)",
            ],
            borderColor: "rgba(0,0,0,0.1)",
            data: [105, 63, 446, 33, 13, 44],
          },
        ],
      },
      options: {
        borderWidth: 0,
        weight: 1,
        cutout: 170,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: "#4c3c90",
            titleColor: "#edebf4",
            padding: "16",
            titleFont: {
              weight: "bold",
              // size: 30,
            },
            bodyFont: {
              size: 18,
            },
            displayColors: false,
          },
        },
        scales: {
          y: {
            display: false,
          },
        },
      },
    })
  }, [])
  return (
    <>
      <div className="chart-canvas">
        <canvas id="myChart"></canvas>
        <h1 className="text-chart">
          <CountUp start={0} end={691} />
        </h1>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    </>
  )
}
export default ChartComponent
