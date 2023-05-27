import React from "react";
import ReactApexChart from "react-apexcharts";

type Props = {};

const StackedBarGraph = ({}: Props) => {
  const options: any = {
    chart: {
      type: "bar",
      width: "100%",
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false, // you can either change hear to disable all grids
      xaxis: {
        lines: {
          show: false, //or just here to disable only x axis grids
        },
      },
      yaxis: {
        lines: {
          show: false, //or just here to disable only y axis
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
        "01/05/2011 GMT",
        "01/06/2011 GMT",
        "01/07/2011 GMT",
        "01/08/2011 GMT",
        "01/09/2011 GMT",
      ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    legend: {
      enabled: false,
      show: false,
    },
    fill: {
      opacity: 1,
    },
  };
  const series = [
    {
      name: "PRODUCT A",
      data: [44, 55, 41, 67, 22, 43, 44, 55, 41],
    },
    {
      name: "PRODUCT B",
      data: [13, 23, 20, 8, 13, 27, 13, 23, 20],
    },
    {
      name: "PRODUCT C",
      data: [11, 17, 15, 15, 21, 14, 11, 17, 15],
    },
    {
      name: "PRODUCT D",
      data: [21, 7, 25, 13, 22, 8, 21, 7, 25],
    },
  ];
  return <ReactApexChart options={options} series={series} type="bar" />;
};

export default StackedBarGraph;
