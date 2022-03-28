import React, { useEffect } from "react"
import Highcharts from "highcharts"

const ChartComponent = () => {
  useEffect(() => {
    // var colors = ["#8d62a0", "#ceb3d8", "#d5dddd"]
    var chart = new Highcharts.Chart(
      {
        chart: {
          renderTo: "vacation-time-chart",
          type: "pie",
          height: 500,
          width: 500,
          borderRadius: 0,
        },
        colors: ["#4C3C90", "#7063A6", "#948ABC", "#B7B1D3", "#DBD8E9", "#EDEBF4"],
        credits: {
          enabled: false,
        },
        title: false,
        tooltip: {
          followPointer: false,
          followTouchMove:true,
          headerFormat: '{point.key}: <b>{point.y}</b>',
          pointFormat: ' ',
          style: {
            fontSize: "20px"
          }
        },
        plotOptions: {
          pie: {
            borderWidth: 6,
            startAngle: 90,
            innerSize: "75%",
            size: "100%",
            dataLabels: false,
            point: {
              events: {
                mouseOver: function () {
                  this.series.chart.innerText.attr({ text: this.y })
                },
                mouseOut: function () {
                  this.series.chart.innerText.attr({ text: 663 })
                },
              },
            },
          },
        },

        series: [
          {
            colorByPoint: true,
            data: [
              {
                name: "Ankieter terenowy",
                y: 105,
              },
              {
                name: "Ankieter CATI",
                y: 64,
              },
              {
                name: "Audytor",
                y: 445,
              },
              {
                name: "Koordynator",
                y: 33,
              },
              {
                name: "Moderator",
                y: 13,
              },
              {
                name: "Transkrybent",
                y: 44,
              },
            ],
          },
        ],
      },
      function (chart) {
        // on complete

        var xpos = "50%"
        var ypos = "53%"
        var circleradius = 102

        chart.innerText = chart.renderer
          .text("663", 160, 270)
          .css({
            color: "#4C3C90",
            fontSize: "106px",
            textAlign: "center",
            fontFamily: "Manrope",
            fontWeight: 800,
            textAlign: "center",
          })
          .attr({
            zIndex: 999,
          })
          .add()
      }
    )
   
  }, [])

  return (
    <>
      {/* <div className="chart-canvas"> */}
        {/* <canvas id="myChart"></canvas>
        <h1 className="text-chart">
          <CountUp start={0} end={691} />
        </h1> */}
        {/* <HighchartsReact
    highcharts={Highcharts}
    options={options}
  /> */}
        <div
          id="vacation-time-chart"
          style={{ minWidth: "500px", height: "500px", margin: "0 auto" }}
        ></div>
      {/* </div> */}
      {/* <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> */}
      <script src="http://code.highcharts.com/highcharts.js"></script>
    </>
  )
}
export default ChartComponent
