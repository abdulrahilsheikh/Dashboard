import ReactApexChart from "react-apexcharts";

type Props = {};

const DoughNut = ({}: Props) => {
  const options: any = {
    chart: {
      type: "donut",
      chart: {
        width: 20,
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    legend: {
      enabled: false,
      show: false,
    },
  };
  const series = [44, 55, 41, 17, 15];
  return <ReactApexChart options={options} series={series} type="donut" />;
};

export default DoughNut;
