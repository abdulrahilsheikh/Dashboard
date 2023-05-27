import React from "react";
import ReactApexChart from "react-apexcharts";

type Props = {};

const BarGraph = ({}: Props) => {
  const options: any = {
    chart: {
      width: "100%",
      type: "bar",
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
            enabled: false,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    xaxis: {
      colors: ["#F44336"],
      type: "datetime",
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
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
    tooltip: {
      enabled: false,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    legend: {
      enabled: false,
    },
    fill: {
      opacity: 1,
      colors: ["#FFF"],
    },
  };
  const series = [
    {
      name: "PRODUCT A",
      data: [67, 22, 43, 44],
    },
  ];
  return <ReactApexChart options={options} series={series} type="bar" />;
};

export default BarGraph;
