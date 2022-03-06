import React, { useEffect } from "react"
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
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "691",
            position: "bottom",
            fullSize: false,
          },
          tooltip: {
            backgroundColor: "#4c3c90",
            titleColor: "#edebf4",
            padding: "16",
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
      </div>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    </>
  )
}
export default ChartComponent
