import ReactApexChart from "react-apexcharts";
import { darkTheme } from "../../theme/theme";
import { useTheme } from "styled-components";

const Chart = () => {
  const theme = useTheme();
  return (
    <ReactApexChart
      series={[
        {
          data: [
            {
              x: new Date(1538879400000),
              y: [6604.44, 6604.44, 6600, 6603.5],
            },
            {
              x: new Date(1538881200000),
              y: [6603.5, 6603.99, 6597.5, 6603.86],
            },
          ],
        },
      ]}
      type="candlestick"
      height={350}
      options={{
        plotOptions: {
          candlestick: {
            wick: {
              useFillColor: true,
            },
            colors: {
              upward: "#920",
              downward: "#249",
            },
          },
        },

        chart: {
          type: "candlestick",
          height: 350,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          type: "datetime",
          labels: { style: { colors: theme.textColor } },
        },
        yaxis: {
          labels: { style: { colors: theme.textColor } },
          tooltip: {
            enabled: true,
          },
        },
        tooltip: {
          fillSeriesColor: true,
          theme: "dark",
        },
      }}
    />
  );
};

export default Chart;
